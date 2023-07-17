const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent_, args_, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        login: async (parent_, { email, password }) => {
            const user = await User.findOne({ email })
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            
            const correctPassword = await user.isCorrectPassword(password);
            if (!correctPassword) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },

        addUser: async (parent_, { username, email, password }) => { 
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, user };
        },

        saveBook: async (parent_, { input }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { savedBooks: input } },
                    { new: true }
                );

                return updatedUser;
            }

            throw new AuthenticationError('You are not logged in');
        },
        
        removeBook: async (parent_, { bookId }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId } } },
                    { new: true }
                );

                return updatedUser;
            }

            throw new AuthenticationError('You are not logged in');
        },
    },
};

module.exports = resolvers;