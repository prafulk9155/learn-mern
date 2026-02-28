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

### Simple todo example using state 

```js
import { useState } from "react";

export default function TodoExample() {
  const [taskList, setTaskList] = useState([]);
  const [taskItem, setTaskItem] = useState("");
  function addTask() {
    if (!taskItem.trim()) return;
    setTaskList([...taskList, taskItem]);
    setTaskItem("");
  }

  function deleteTask(index) {
    setTaskList(taskList.filter((value, i) => i !== index));
  }
  return (
    <>
      <h2>Todo List</h2>
      <input
        type="text"
        value={taskItem}
        onChange={(e) => setTaskItem(e.target.value)}
        placeholder="Enter task"
      />
      {taskItem && <button onClick={addTask}>Add Task</button>}
      <ol>
        {taskList.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button
              onClick={() => {
                deleteTask(index);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}

```

### 6. If else in React
```js

import { useState } from "react";

export default function IfElseComponent() {
    const [value,setValue] = useState(0);

    return(

        <>
        <h3>Value :{value}</h3>
        <button onClick={()=>setValue(value+1)} >Add</button>
         {/* if else block */}
        {
            value && value%2==0?<p>This value is EVEN Number</p>:null
        }
        <hr/>

        {/* multiple block */}
        
            {
                value !== undefined && value !== null && (
                    value ==0  ? <p>Default value is : {value}</p> :
                    
                    value % 2 === 0 ? (
                        <p>This is divisible by 2</p>
                    ) : value % 3 === 0 ? (
                        <p>This is divisible by 3</p>
                    ) : (
                        <p>This is not divisible by 2 and 3</p>
                    )
                )
            }
        </>


    )
}
```

### 7. Props in react 

- data passing from parent component 
```js
import PropsComponent from "./7_PropsComponent";

export default function App() {
  const userData = [{
    name: "ABC",
    age: 25,
    address: "XYZ Street, City",
  },
  {
    name: "PQR",
    age: 30,
    address: "LMN Street, City",
  },
  {
    name: "DEF",
    age: 28,
    address: "OPQ Street, City",
  }]

  return (
    <>
      <h1>Main App</h1>
        <PropsComponent  userdata={userData}/>

    </>
  );
}

```
- using to child component 
```js
export default function PropsComponent(props) {
    return (
        <>
            <p>Props data</p>
            {
                props.userdata.map((item, index) => {
                    return (
                        <>
                            <hr />
                            <p>Name : {item.name}</p>
                            <p>Age : {item.age}</p>
                            <p>Address : {item.address}</p>

                        </>
                    )

                })
            }
        </>
    )
}
```
![alt text](/public/intervire_questions/props.png)