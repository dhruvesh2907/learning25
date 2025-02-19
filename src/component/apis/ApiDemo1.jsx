import React, { useEffect, useState } from 'react'
import axios from "axios";
export const ApiDemo1 = () => {
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])

  const getUserData = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res) //Axios object
    console.log(res.data) //api response...
    console.log(res.data.message)
    setmessage(res.data.message)
    setusers(res.data.data)
    
  };
  useEffect(()=>{
    getUserData()
},[])
 

  return (
    <div style={{ textAlign: "center",background:"white" }}>
      <h1>API DEMO 1</h1>
      {/* <button onClick={()=>{getUserData()}}>GET</button> */}
      {message}
      <div style={{ color: "black" }}>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>ID</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {users?.map((user) => {
          return ( <tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>
                                {
                                    user.isActive == true ? "Active" : "Not active"
                                }
                            </td>

          </tr>
            
          )
        })}</tbody>
      </table>
    </div> 
    </div>
    
  );
 
};