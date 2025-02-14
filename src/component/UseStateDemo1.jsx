import React, { useState } from 'react'

export const UseStateDemo1 = () => {
    const [count,setCount] = useState(0);

    function test(){
        alert("test function called.....");
    }

    const increaseCount = () => {
        setCount(count+1);
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{color:"white"}}>USE STATE DEMO 1</h1>
        <button onClick={test}>CLICK</button>
        <button onClick={()=>{
            test();
        }}>
            Click
        </button>
        <h1 style={{color:"whitesmoke"}}>count = {count}</h1>
        <button onClick={()=>{increaseCount();}}>
            Increase
        </button>
    </div>
  );
};
