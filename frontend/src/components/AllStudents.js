import React, { useState, useEffect } from "react";
import axios from "axios";
export default function AllStudent() {

const [students, setStudents] = useState([]);

useEffect(() => {
        axios.get("http://localhost:5000/student/").then((res) => {
            setStudents(res.data);
            console.log(students);
        }).catch((err) => {
            alert(err.message);
        })
    },[])

    return (
    
        <div>
            <div className="topic">
                <h1>All Students</h1>
            </div>

            <table id="student-tb">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(item => {
                    return (
                        <tr key={item._id}>
                            <td>{ item.name }</td>
                            <td>{ item.age }</td>
                            <td>{ item.gender }</td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </div>
    )
}