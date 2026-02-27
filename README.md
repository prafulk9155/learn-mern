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

### 3. Importing asn exporting component , multiple component

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
