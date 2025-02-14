import React, { useState } from 'react'

export const InputDemoHw2 = () => {
    const [name, setname] = useState("")
    const [sid, setsid] = useState("")
    const [number, setnumber] = useState("")
    const[dob,setdob] = useState("")
    const [department, setdepartment] = useState("")
  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{color:"red"}}>INPUT DEMO HW 2</h1>
        <div>
            <label style={{color:"red"}}>NAME:</label>
            <input type='text' placeholder='Enter name' onChange={(event)=>{setname(event.target.value)}}>
            </input>
            <div style={{color:"red"}}>
                {name}
            </div>
            <label style={{color:"red"}}>SID:</label>
            <input type='number ' placeholder='Enter sid' onChange={(event)=>{setsid(event.target.value)}}>
            </input>
            <div style={{color:"red"}}>
                {sid}
            </div>


            <label style={{color:"red"}}>CONTACT NO.</label>
            <input type='tel'placeholder='Enter your number' onChange={(event)=>{setnumber(event.target.value)}}>
            </input>
            <div style={{color:"red"}}>
                {number}
            </div>
            <label style={{color:"red"}}>DOB:</label>
            <input type='date' placeholder='Enter your bloodgroup' onChange={(event)=>{setdob(event.target.value)}}>
            </input>
            <div style={{color:"red"}}>
                {dob}
            </div>
            <label style={{color:"red"}}>DEPARTMENT</label>
            <input type='text' placeholder='Enter department' onChange={(event)=>{setdepartment(event.target.value)}}>
            </input>
            <div style={{color:"red"}}>
                {department}
            </div>
        </div>
    </div>
  )
}
