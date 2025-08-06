import { useState } from "react";
export default function Skilles (){
    const [skilles, setSkilles]=useState("")
    function skillesHundalles(event){
    console.log(event.target.value, event.target.checked)
    if(event.target.checked)
        setSkilles([...skilles,event.target.value])
    else{
        setSkilles([...skilles.filter((item)=>item!=event.target.value)])
    }
    }
    return(
        <div>
        
       <h1>Cheakbox hundling </h1>

       <form action="">
        <label htmlFor="html"> Html
           <input type="checkbox" value="html" id="html"onChange={skillesHundalles}/>
        </label>
        <br />
        <br />
        <label htmlFor="css"> Css
           <input type="checkbox" value="css" id="css" onChange={skillesHundalles}/>
        </label>
        <br />
        <br />
        <label htmlFor="java"> Java
           <input type="checkbox" value="java" id="java" onChange={skillesHundalles}/>
        </label>
       </form>
        <h1>{skilles.toString()}</h1>
        </div>
    )
}