import React from 'react'
import axios from 'axios'

export const PostApiDemo1 = () => {
    const postData =async()=> {
        var userobj ={
            name:"Ram",
            email:"Ram@gmail.com",
            age:22,
            isActive:true

        }
        const res = await axios.post("https://node5.onrender.com/user/user",userObj)
        console.log(res)
        console.log(res.data)
        if(res.status ==201){
            alert("user saved...")
        }

        
    }
  return (
    <div style={{textAlign:"center",backgroundColor:"white"}}>
    <h1>POST REQUEST</h1>
    <button onClick={()=>{postData()}}>ADD USER</button>
</div>
  )
}
