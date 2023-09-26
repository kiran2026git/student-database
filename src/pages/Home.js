import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';
export default function Home() {

    const [students,setStudents]=useState([])
    const { id } = useParams();

    useEffect(() =>{
      const loadStudents=async () => {
        const result=await fetch("http://localhost:9091/students");
        const resData=await result.json();
        setStudents(resData);
        console.log(resData);
        
       }
       loadStudents();
    },[]       
);
   
const deleteStudent= async (id) => {
  await axios.delete(`http://localhost:9091/student/${id}`);
  setStudents();
};

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">email</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      students.map((students,index)=>(
        <tr key={index}>
          <td>{index+1}</td>
          <td>{students.name}</td>
          <td>{students.username}</td>
          <td>{students.email}</td>
          <td>
            <Link className="btn btn-primary mx-2" to={`/viewstudent/${students.id}`}>View</Link>
            <Link className="btn btn-outline-primary mx-2" to={`/editstudent/${students.id}`}>Edit</Link>
            <button className="btn btn-danger mx-2" onClick={()=>deleteStudent(students.id)}>Delect</button>
          </td>
          
        </tr>   
      ))      

    }
    
   
  </tbody>
</table>
        </div>
    </div>
  )
}
