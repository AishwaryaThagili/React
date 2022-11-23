# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Lifecycle methods using useEffect `

### `ComponentDidMount using useEffect `

### `import useEffect `

import useEffect from react for using it inside the file.


### `useEffect `

useEffect takes two arguments first is a method and a dependency.

without the state and the prop changes inside the component the useEffect hook will only be called once.

this defines the ComponentDidMount lifecycle.


### `ComponentDidUpdate using useEffect `

The props and states are been updated on the click of the button which will call the useEffect hook for effect update based on the dependencies.

1) If No dependency is mentioned

For every updation the useEffect will be called.


2) empty array

useEffect is called only once.

3) dependencies mentioned inside a array ex: [count]

Then for every updation the state of the mentioned dependency( In the above example based on count updation) the useEffect is called.
multiple can be called by seperating by comma inside the array.


### `ComponentWillUnmount using useEffect `

### `return`

Some effects require cleanup to reduce memory leaks.

Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

We do this by including a return function at the end of the useEffect Hook.


### `fetch API using useEffect `

### `fetch(url)`

Using the fetch API method information is retrieved from the url mentioned in the fetch.

### `useEfect`

fetch is placed inside the useEffect hook for it to run. To run only once the dependency is set to an empty array([]).

### `useState`

On the successful retrieval of the information it is set to the declared variable data using useState hook.

### `if(data)`

The variable data is initialized to null. To use details check whether the details are been fetched then perform the actions.

### `using keys`

Since the product information (mobile) contains only one object We need not use loop we can directly access by using the keys of the object

### `map`

If we have object inside the object we can use map function to loop and display the objects that are inside the object.






