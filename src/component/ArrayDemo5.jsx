import React from 'react'

export const ArrayDemo5 = () => {
    var players =[
        {
          id: 1011,
          name: "Parth",
          score: "50",
          gender: "male",
          age: "50",
          isActive: false,
        },
        {
          id: 1012,
          name: "Dhruv",
          score: "105",
          gender: "male",
          age: "22",
          isActive: true,
        },
        {
          id: 1016,
          name: "Dipti",
          score: "107",
          gender: "Female",
          age: "38",
          isActive: true,
        },
        {
          id: 551,
          name: "Darshan",
          score: "105",
          gender: "male",
          age: "41",
          isActive: true,
        },
        {
          id: 441,
          name: "Liza",
          score: "71",
          gender: "Female",
          age: "61",
          isActive: false,
        },
      ]
  return (
    <div style={{textAlign: "center"}}>
      <h1 style={{color:"white"}}>Array Demo 5 HW</h1>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>SCORE</th>
            <th>GENDER</th>
            <th>STATUS</th>         
          </tr>
        </thead>
        <tbody>
          {players.map((player) =>{
            const isOld = player.age > 35;
            const isRetired = player.isActive==false;
            return (
              <tr>
                <td>{player.id}</td>
                <td  style={{ backgroundColor: isRetired ? "yellow" : "transparent",color:"Red"}}>{player.name}</td>
                
                <td>{player.age} {isOld && " : Please Retire"}</td>

                <td>
                  <span style={{color:player.score>=100?"Green":"grey"}}>{player.score}
                  </span>
                </td>

                <td>{player.gender}</td>
                <td>{player.isActive ? "Active" : "Inactive"}</td>
              </tr>
            );
          }
        )}
        </tbody>
      </table>
    </div>
  );
};
