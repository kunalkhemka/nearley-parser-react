# Getting Started with nearley-parser-react

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run gen`

This will compile the grammar ```*.ne``` file to the corresponding ```.js``` file.
After the .js file is generated, it is required to manually modify to use ES Modules instead of CommonJS because the react project uses ESM and nearley generates the file using CommonJS which causes integration issues.