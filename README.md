# learn-mern
Created with CodeSandbox

### 1. Hello World 
```js
export default function App() {
  return <h1>Hello World</h1>;
}
```
### 2. Make First Component
create new component
```js
export default function MyFirstComponent(){
    return (
        <h2>This is my first component</h2>
    )
}
```

Import component to main app
```js

import MyFirstComponent from "./MyFirstComponent";

export default function App() {
  return (
    <>
      <h1>Main App</h1>
      <MyFirstComponent />
    </>
  );
}

```

### 3. Importing and exporting component , multiple component

export component
```js
function UserProfile() {
  return (
    <>
      <h1>This is User Profile component</h1>
      <p>Name: XYX</p>
      <p>Email: xyz@email.com</p>
      <UserAddress />
    </>
  );
}

function UserAddress() {
  return (
    <>
      <p>This is section for user address</p>
      <p>ABC, 123, St-05, 110001</p>
    </>
  );
}

export function ThanksMsg() {
  return <p> This for thanks message section</p>;
}

// only one export default can be defined only
export default UserProfile;

```

Import component 
```js
// export fedault us directly used while {} use to export only 
import UserProfile, { ThanksMsg } from "./UserProfile";
export default function App() {
  return (
    <>
      <h1>Main App</h1>
      <UserProfile />
      <ThanksMsg />
    </>
  );
}

```
### 4. Wrinting markup with jsx

variable declare , function declare and calling ...
```js
export default function JSXExample() {
  const name = "XYZ";
  const age = 25;
  function callAlert() {
    alert("alert called");
  }
  function sum(a, b) {
    return a + b;
  }
function calllWithParam(data) {
    alert(data);
  }

  return (
    <>
      <h2>This is user section</h2>
      {/* curl bracket to get variablr value */}
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Sum value : {sum(5, 6)}</p>
      {/* onClick with function name to call function  we dont add () to the function . if we add () to function name it directly called the function*/}
      <button onClick={callAlert}> Show Alert</button>
    {/* paramaterized function */}
      <button onClick={() => calllWithParam("this is paramaterized function")}>
        Call param function
      </button>
    </>
  );
}
 ```
### 5. State in React 
- `useState` is a React Hook that allows functional components to store and manage state.
- When the state updater function is called with a new value, React re-renders the component to update the UI accordingly.

---

```js
import { useState } from "react";
export default function StateExample() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h3>Counter :{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </>
  );
}

```
