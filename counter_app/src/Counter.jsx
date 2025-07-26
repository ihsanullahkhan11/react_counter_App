import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const decrease = () => {
         setCount(count -1)
    }
  return (
    <div 

    
    >
        <h1>React Counter App</h1>
        <h1>Number: {count}</h1>
        <button onClick={() => setCount( count +1)}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={ () => setCount(0)}>reset</button>
      
    </div>
  )
}

export default Counter
