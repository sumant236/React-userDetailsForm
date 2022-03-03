import React from 'react'

export const Table = ({data,handleDelete}) => {
  return (
    <table style={{border:"2px solid black", width:"700px", margin:"70px auto"}}>
        <thead style={{border:"2px solid red"}}>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Department</th>
                <th>Salary (Annual)</th>
                <th>Marital Status</th>
                <th>Profile picture</th>
            </tr>
        </thead>
        <tbody>
                {data.map((detail)=>{
                return (
                    <tr>
                        <td>{detail.name}</td>
                        <td>{detail.age}</td>
                        <td>{detail.address}</td>
                        <td>{detail.department}</td>
                        <td>{detail.salary}</td>
                        <td>{detail.maritalStatus}</td>
                        <td><img width="100px" src={detail.image} alt="" /></td>
                    </tr>
                    ) 
                    }  
                )}
        </tbody>
    </table>
  )
}
