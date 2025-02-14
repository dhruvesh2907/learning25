import React from 'react'

export const ArrayDemo1 = () => {

    var users = ["ram","shyam","amit","sumit"]

  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{textAlign:"center",color:"blue"}}> ARRAY DEMO 1</h1>
        
        {
            users.map((user)=>{
                return <li style={{color:"white"}}>{user}</li>
            })  
        }
    </div>
  )
}