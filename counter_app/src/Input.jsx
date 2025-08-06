import { useState } from "react"
function Input (){

    const [value, setval]= useState("ihsan")
    return(
        <div>

        <hr />
            <h1>input feild</h1>
            <input type="text"  
           placeholder="enter user name" value={value}
           onChange={(event) =>setval(event.target.value)} 
           
           />
           <h1>{value}</h1>
           <button onClick={(event) =>setval("")}>clear</button>
        </div>
    )
}
export default Input;