import React, { useRef, useState } from 'react'

export const About = ({onTaskCreate}) => {
    const [details, setDetails] = useState({
        name: "",
        age:"",
        address: "",
        department:"",
        salary:"",
        maritalStatus: false,
        image: null
    });
    const imageRef = useRef(null);

    const handleChange = (e) => {
        let { name, value, type, checked } = e.target;
        // compute final value, is it value / checked
        const val = type === "checkbox" ? checked : value;
        setDetails({
          ...details,
          [name]: val
        });
      };
    const handleSubmit = (e) =>{
        if(details.form === "")
            return false;
        e.preventDefault();
        onTaskCreate &&  onTaskCreate(details);
        setDetails({ name: "",
            age: "",
            address: "",
            department: "",
            salary: "",
            maritalStatus: false,
            image: null});        
        console.log(details)
    }
    const handleImageChange = (e) => {
        const file = imageRef.current.files[0];
        let src = null;
        if (file) {
            src = URL.createObjectURL(file);
        }
        setDetails({
            ...details,
            image: src
          });
        return () => {
            URL.revokeObjectURL(src);
        };
    }
  return (
      <form onSubmit={handleSubmit}>
        <div style={{display:"flex", justifyContent:"space-around", margin:"20px", flexWrap:"wrap"}}>
        <label>Name: </label>
        <input name="name" value={details.name} onChange={handleChange} placeholder="Enter Your Name"/>
        <label>Age: </label>
        <input name="age" value={details.age} onChange={handleChange} placeholder="Enter Your Name"/>
        <label>Address: </label>
        <input name="address" value={details.address} onChange={handleChange} placeholder="Enter Your Name"/>
        <select name="department" value={details.department} onChange={handleChange}>
            <option key="1" value="">Select a Department</option>
            <option key="CS" value="Computer Science">Computer Science</option>
            <option key="EC" value="Electric">Electric Engg.</option>
            <option key="AE" value="Aerospace Engg.">Aerospace Engg.</option>
            <option key="ME" value="Mechanical Engg.">Mechanical Engg.</option>
            <option key="CE" value="Civil Engg.">Civil Engg.</option>
        </select>
        <label>Salary: </label>
        <input name="salary" value={details.salary} onChange={handleChange} placeholder="Enter Your Name"/>
        <label>Marital Status</label>
        <input type="checkbox" checked={details.maritalStatus} name="maritalStatus" onChange={handleChange}/>
        <input type="file" ref={imageRef} onChange={handleImageChange}/>
        <button type='submit' value="Submit" onSubmit={handleSubmit}>Submit</button>
    </div>
    </form>
  )
}
