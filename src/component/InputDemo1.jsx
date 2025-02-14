import React, { useState } from 'react'

export const InputDemo1 = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    
    const nameHandler = (event)=>{
        setname(event.target.value)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{color:"red"}}>
            INPUT DEMO 1
        </h1>
        <div>
            <label style={{color:"red"}}>NAME:</label>
            <input type='text' placeholder='Enter Name' onChange={(event)=>{nameHandler(event)}}>
            </input>
            <div style={{color:"red"}}>{name}</div>
        </div>
        <div>
            <label  style={{color:"red"}}>EMAIL:</label>
            <input type='text' placeholder='enter email' onChange={(event)=>{setemail(event.target.value)}}></input>
            <div style={{color:"red"}}>{email}</div>
        </div>
    </div>
  );
};
