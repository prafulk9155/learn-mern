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