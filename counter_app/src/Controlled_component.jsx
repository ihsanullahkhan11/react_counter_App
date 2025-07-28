import { useState } from "react";
function ControlledComponent(){
    const [name, setname] =useState("")
    const [passowerd, setPassowerd] =useState("")
    const [email, setEmail] =useState("")
    return(
       <div>
        <hr />
        <form action="">
            <input type="text" placeholder="inter User name " value={name}  onChange={(event) => setname(event.target.value)}/>
<br />

        <input type="password" placeholder="inter User name " value={passowerd}  onChange={(event) => setPassowerd(event.target.value)}/>
      <br />
    
        <input type="text" placeholder="inter User name " value={email}  onChange={(event) => setEmail(event.target.value)}/>
         <br />
        
        </form>
        <button onClick={(event) => {setname(""), setEmail(""), setPassowerd("")}}>clear</button>


        <h1>{name}</h1>
        <h2>{passowerd}</h2>
        <h3>{email}</h3>
       </div>
    )
}
export default ControlledComponent;