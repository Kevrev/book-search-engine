# Book Search Engine

## Description

This application utilizes a prebuilt React app, the purpose of it being to convert from a RESTful API to a GraphQL API, refactoring all necessary code in the process. The application itself allows users to search for books and save them to their account. The user can also view their saved books and delete them from their account.

## Usage

Users can access the deployed Heroku application and navigate it like a normal site, performing functions such as logging in and searching. The user can also clone the repository and run `npm install` in both public and server folders to install all necessary dependencies. The user can then run `npm run develop` to start the server and navigate to `localhost:3000` to view the application.

![Screenshot](/assets/images/screenshot.jpg)

Link to the GitHub repository:

https://github.com/Kevrev/book-search-engine

The deployed application on Heroku:

https://kevrev-book-search-engine-c09f9ca598f8.herokuapp.com/

## Technology Used

[React](https://react.dev/)

[Apollo Server](https://www.apollographql.com/docs/apollo-server/)

[GraphQL](https://graphql.org/)

[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

[Mongoose](https://mongoosejs.com/)

[MongoDB](https://www.mongodb.com/)

[Node.js](https://nodejs.org/en/)

[Express.js](https://expressjs.com/)

[Heroku](https://www.heroku.com/)

[bcrypt](https://www.npmjs.com/package/bcrypt)

[Bootstrap](https://getbootstrap.com/)

## Credits

Credit to [Material UI](https://mui.com/material-ui/react-card/) for their components, but especially their react-card component which I used for the project cards on the Portfolio page.

Credit to [Drew Reese](https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages) on StackOverflow as well as other commentors for the explanations on the differences between HashRouter and BrowserRouter and how to use HashRouter to deploy a React app to GitHub pages.