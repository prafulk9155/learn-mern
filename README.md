# learn-mern
Created with CodeSandbox

### 1. Hello World 
```js
export default function App() {
  return <h1>Hello World</h1>;
}
```
### 2. Make First Component
```js
export default function MyFirstComponent(){
    return (
        <h2>This is my first component</h2>
    )
}

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
