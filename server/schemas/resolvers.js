const { User } = require('../models');

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
