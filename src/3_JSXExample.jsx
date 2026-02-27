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
