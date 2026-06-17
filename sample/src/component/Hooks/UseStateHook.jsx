import React, { useState } from 'react'

function UseStateHook() {
    const [color,setColor]=useState('blue');
    const mouseover=()=>{
        // setColor('red');
        setColor(color=='blue'?'red':'blue')

    }
    // couter
    const [count,setCount]=useState();

    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }


  return (
    <>
    <h1>UseStateHook</h1>
    <p style={{color:color}} onMouseOver={mouseover}>this is a paragraph</p>    

<div>
    <h2>Counter: {count}</h2>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>Reset</button>

</div>
    </>
  )
}

export default UseStateHook