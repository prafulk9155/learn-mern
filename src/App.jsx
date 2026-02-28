// import MyFirstComponent from "./1_MyFirstComponent";
// export fedault us directly used while {} use to export only
// import UserProfile, { ThanksMsg } from "./2_UserProfile";
// import JSXExample from "./3_JSXExample";
// import StateExample from "./5_StateExample";
// import TodoExample from "./ToDoExample";
// import IfElseComponent from "./6_If_ElseComponent";
import { useState } from "react";
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

  const [showValue, setShowValue ]= useState()

  return (
    <>
      <h1>Main App</h1>
      {/* <MyFirstComponent /> */}
      {/* <UserProfile />
      <ThanksMsg /> */}
      {/* <JSXExample /> */}
      {/* <StateExample /> */}
      {/* <TodoExample /> */}
      {/* <IfElseComponent /> */}
        <PropsComponent  userdata={userData} setValueOnclick={showValue} />

        <button onClick={()=>{setShowValue("this value is passon click event to props")}}>
          Click to set value in PropsComponent
        </button>
    </>
  );
}
