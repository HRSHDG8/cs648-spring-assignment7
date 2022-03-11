# Company Inventory Page

Use Mongo with GraphQL to persist inventory data on mongodb atlas instance

## Initial Step

Go to Api folder and run `npm run install` to install all the dependencies.\
Go to Ui folder and run `npm run install` to install all the dependencies.

## Development server

Go to Api folder and run `npm run start` to bring up the Api server.\
Go to Ui folder and run `npm run start` to bring up the UI.\
Now Navigate to `http://localhost:8000/` to interact with the application.

## GraphQL Playground

After starting Development Server using previous step, open `http://localhost:3000/graphql` to interact with the API using GraphQL Playground.

## Compile Watch Mode

Go to UI folder and run `npm run watch` to make babel watch for changes in files. Make any changes and refresh the browser, the changes will be reflected. Make sure you have started the server as per the previous step.

## MongoDB reset

    1) open mongo shell
    2) navigate to api directory
    3) run load('scripts/init.mongo.js') or `mongosh "mongodb+srv://cluster0.uimtv.mongodb.net/myFirstDatabase" --username hmac scripts/init.mongo.js`

## Lint check

To check for lint issues, go to Api and Ui folder and run `npm run lint` to get the linting issues in the respective folders.
