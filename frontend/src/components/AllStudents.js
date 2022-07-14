import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Assets/Styles.css";

export default function AllStudent() {

const [students, setStudents] = useState([]);


/* To get all student details when render */
useEffect(() => {
        axios.get("http://localhost:5000/student/").then((res) => {
            setStudents(res.data);
            // console.log('Student Details: ', res.data);
            // console.log('This is the response',res.data);
            
        }).catch((err) => {
            alert(err.message);
        })
    },[])

    /* To delete a student */
    const deleteStudent = (id) =>{
        axios.delete(`http://localhost:5000/student//delete/${id}`).then((res) => {
            alert('Student Deleted Successfully');
        }).catch((err) => {
            alert(err.message);
        })
        
        //load db data after delete a student
        setTimeout(()=>{
            axios.get("http://localhost:5000/student/").then((res) => {
            setStudents(res.data);
            }).catch((err) => {
            alert(err.message);
            })
            },500)

    }

    return (
    
        <div>
            <div className="topic">
                <h1>All Students</h1>
            </div>

            <div>
            <table id="allStudents">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Edit/Delete</th>
                </tr>
                     {students.map((std) => {
                        return <tr key={std._id}>
                                    <td>{std.name}</td>
                                    <td>{std.age}</td>
                                    <td>{std.gender}</td>
                                    <td className="edit-dlt">
                                        <button className="btn" > Edit </button>
                                        &nbsp;&nbsp;
                                        {/* To make the space between buttons */}
                                        <button className="btn" onClick={() => deleteStudent(std._id)}> Delete </button>
                                    </td>
                               </tr>;
                                    })
                     }
            </table>
            </div>
        </div>
    )
}