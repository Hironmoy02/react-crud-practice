import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
function Add() {
    const [name,setName]=useState("");
    const[students,setStudents]=useState([]);
    const handleSubmit=(e)=>{
e.preventDefault();

setStudents(currentStudent=>[...currentStudent,name]);
setName("");
 }

const handleDelete=(deleteStudent)=>{
const newStudents=students.filter((student)=>student!==deleteStudent)
setStudents(newStudents)
}


  return (
    <>
      {/* <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Default
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup> */}



      {/* <br />
      <div>{name}</div>
      <InputGroup size="lg">
        <InputGroup.Text value={name} onChange={(e)=>setName(e.target.value)} id="inputGroup-sizing-lg">Large</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup> */}
<br/>
<form >

<div><h2>Add a new student</h2></div>
    <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
    <Button variant="success" onClick={handleSubmit} >Push</Button>{' '}
</form>
<br/>

<h1>Student's list</h1>
<ul>
{
students.map((student,index)=><li key={index}>{student} <button onClick={()=>handleDelete(student)}>Delete</button> </li>)
}

</ul>


    </>
  );
}

export default Add;