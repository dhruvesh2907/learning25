import React, { useState } from 'react'

export const UseStateDemo2 = () => {
    const [isLoading, setisLoading] = useState(true)
    const stopLoading = ()=>{
        setisLoading(false)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{color:"red"}}>Use State Demo 2</h1>
        <h1 style={{color:"red"}}>
            {
                isLoading == true ? "Loading...": ""
            }
        </h1>
        <h1>
            <button onClick={()=>{stopLoading()}}>
                Stop
            </button>
        </h1>
    </div>
  );
};
