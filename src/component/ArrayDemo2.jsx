import React from 'react'

export const ArrayDemo2 = () => {
    var students = [
        {
            name:"Dhruv",
            age:21,
            marks:80
        },
        {
            name:"Darshan",
            age:25,
            marks:75
        },
        {
            name:"Ashish",
            age:22,
            marks:65
        }
    ]
  return (
    <div style={{textAlign:"center"}}>
    <h1 style={{color:"red"}}>ArrayDemo2</h1>
    {
        students.map((stu)=>{
            return <div>
                <h1>Name = {stu.name}</h1>
                <h2>Age = {stu.age}</h2>
                <h3>Marks = {stu.marks}</h3>
                </div>
        })
    }
    </div>
  );
};
