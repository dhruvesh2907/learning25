import React from "react";

export const Content = () => {
  var name = "Dhruvesh";
  var age = 20;
  var isActive = false;
 

  return (
    <div style={{backgroundColor:"GrayText",color:"blue",textAlign:"center"}}>
        < div style={{paddingTop:"80px"}}>
      
      <h1>CONTENT</h1>
      
      <h1 style={{color:"red"}}>Name = {name}</h1>
      <h2>Age = {age}</h2>
      <h2>isActive = {isActive}</h2>
      <h2>active = {isActive == true ? "Active" : "Not Active"}</h2>
      </div>
      
    </div>
  );
};