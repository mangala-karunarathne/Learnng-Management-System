import React, { useState, useEffect } from "react";
import axios from "axios";
export default function AllStudent() {

const [students, setStudents] = useState([]);

useEffect(() => {
    function getStudents() {
        axios.get("http://localhost:5000/student/").then((res) => {
            setStudents(res.data);
        }).catch((err) => {
            alert(err.message);
        })
    }

   
    },[])
    return (
        <div>
            <h1>All Students</h1>
            console.log(students)
        </div>
    )
}