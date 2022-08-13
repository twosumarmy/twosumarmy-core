# Getting Started

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run generate-client`

Generates the API client library given by the remote `openapi.json` file to the `generated` folder.
Internally the generated library is wrapped by another client located in `lib/api` in order to provide
different environment types. The configuration of OpenAPI Tools is located in the file `openapitools.json`.
