# Testing React with Jest and Enzyme

<img src="assets/test-react.png" alt="Testing React using Jest and Enzyme" width="800px" />

## Installation

```bash
# Package Installation
npm install

# Run the Project
npm start

# Project Test
npm test

# Generate Code Coverage Report
npm run test -- --coverage --watchAll=false
```

## Project Covers

- Props Test
- Event Test
- Rest API Test
- Component Test
- Mock functions
- DOM Test
- Snapshot Test

## Folder Structure

```js
 + src
   + components
     + Events
	   + __snapshots__
	   - Events.js  
	   - Events.test.js
	 + Header
	   - Header.js
	   - Header.test.js
	 + Props
	   - Props.js
	   - Props.test.js
	 + RestAPI
	   - RestAPI.js
	   - RestAPI.test.js
   + __mocks__
     - axios.js
```

## Code Coverage Report

```js
|------------------------|----------|----------|----------|----------|-------------------|
| File                   |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
|------------------------|----------|----------|----------|----------|-------------------|
|All files               |    84.21 |        0 |       75 |    83.33 |                   |
| src                    |      100 |      100 |      100 |      100 |                   |
|  App.js                |      100 |      100 |      100 |      100 |                   |
| src/Components/Events  |       50 |        0 |    33.33 |       50 |                   |
|  Events.js             |       50 |        0 |    33.33 |       50 |             14,16 |
| src/Components/Header  |      100 |      100 |      100 |      100 |                   |
|  Header.js             |      100 |      100 |      100 |      100 |                   |
| src/Components/Props   |      100 |      100 |      100 |      100 |                   |
|  Props.js              |      100 |      100 |      100 |      100 |                   |
| src/Components/RestAPI |    85.71 |      100 |       80 |    85.71 |                   |
|  RestAPI.js            |    85.71 |      100 |       80 |    85.71 |                28 |
|------------------------|----------|----------|----------|----------|-------------------|
```

## Technology

- [React](https://create-react-app.dev/docs/getting-started/)
- [Jest](https://jestjs.io/docs/en/getting-started.html)
- [Enzyme](https://enzymejs.github.io/enzyme/docs/installation/react-16.html)
- [Material-UI](https://material-ui.com/getting-started/installation/)
- [Axios](https://github.com/axios/axios)
- [React Testing Library](https://reactjs.org/docs/testing-recipes.html)
