import React, { useState } from 'react'

export const InputDemoHw = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [gender, setgender] = useState("")
    const [ age, setage] = useState(0)
    const [id, setid] = useState(0)
  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{color:"red"}}>INPUT DEMO HW</h1>
        <div>
            <label style={{color:"red"}}>NAME:</label>
            <input type='text' placeholder='Enter name' onChange={(event)=>{setname(event.target.value)}}>
            </input>
            <div style={{color:"red"}}>
                {name}
            </div>
            <label style={{color:"red"}}>EMAIL:</label>
            <input type='text' placeholder='Enter email' onChange={(event)=>{setemail(event.target.value)}}>
            </input>
            <div style={{color:"red"}}>
                {email}
            </div>


            <label style={{color:"red"}}>GENDER=</label>
            <label style={{color:"red"}}>Male</label>
            <input type='radio' id='male' name='male' value='male' onChange={(event)=>{setgender(event.target.value)}}>
            </input>
            
            <div>
            <label style={{color:"red"}}>Female</label>  
            <input type='radio' id='female' name='female' value='female' onChange={(event)=>{setgender(event.target.value)}}>
            </input>
            </div>
            <div style={{color:"red"}}>
                {gender}
            </div>


            <label style={{color:"red"}}>AGE:</label>
            <input type='number' placeholder='Enter age' onChange={(event)=>{setage(event.target.value)}}>
            </input>
            <div style={{color:"red"}}>
                {age}
            </div>
            <label style={{color:"red"}}>ID:</label>
            <input type='text' placeholder='Enter ID' onChange={(event)=>{setid(event.target.value)}}>
            </input>
            <div style={{color:"red"}}>
                {id}
            </div>
        </div>
    </div>
  )
}
