import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Assets/Styles.css";
import { VIEW_MODE, EDIT_MODE } from "./constant";

export default function AllStudent() {
  const [students, setStudents] = useState([]);
  const [mode, setMode] = useState(VIEW_MODE);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  /* To get all student details when render */
  useEffect(() => {
    axios
      .get("http://localhost:5000/student/")
      .then((res) => {
        setStudents(res.data);
        // console.log('Student Details: ', res.data);
        // console.log('This is the response',res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  /* To delete a student */
  const deleteStudent = (id) => {
    axios
      .delete(`http://localhost:5000/student//delete/${id}`)
      .then((res) => {
        alert("Student Deleted Successfully");
      })
      .catch((err) => {
        alert(err.message);
      });

    //load db data after delete a student
    setTimeout(() => {
      axios
        .get("http://localhost:5000/student/")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }, 500);
  };

  const activeEditMode = (selectedId) => {
    setMode(EDIT_MODE);
    setId(selectedId);
  };

  const editStudent = (stdntid) => {
    const newStudent = { name, age, gender };

    axios
      .put(`http://localhost:5000/student/update/${stdntid}`, newStudent)
      .then((res) => {
        console.log(res.data);
        alert("Student Updated Successfully");
        setName("");
        setAge("");
        setGender("");
      })
      .catch((err) => {
        alert(err);
      });

    setMode(VIEW_MODE);

    //load db data after delete a student
    setTimeout(() => {
      axios
        .get("http://localhost:5000/student/")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }, 500);
  };

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
            return (
              <tr key={std._id}>
                {mode === EDIT_MODE && id === std._id ? (
                  <>
                    <td>
                      {" "}
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={std.name}
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        type="numeric"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder={std.age}
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        placeholder={std.gender}
                      />
                    </td>
                  </>
                ) : (
                  <>
                    <td>{std.name}</td>
                    <td>{std.age}</td>
                    <td>{std.gender}</td>
                  </>
                )}

                <td className="edit-dlt">
                  {mode === EDIT_MODE && id === std._id ? (
                    <button
                      className="btn"
                      onClick={() => editStudent(std._id)}
                    >
                      {" "}
                      Save{" "}
                    </button>
                  ) : (
                    <>
                      <button
                        className="btn"
                        onClick={() => activeEditMode(std._id)}
                      >
                        {" "}
                        Edit{" "}
                      </button>
                      &nbsp;&nbsp;
                      {/* To make the space between buttons */}
                      <button
                        className="btn"
                        onClick={() => deleteStudent(std._id)}
                      >
                        {" "}
                        Delete{" "}
                      </button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
