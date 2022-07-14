import React, { useState } from "react";
import axios from "axios";


function AddStudent(){

    const[name,setName] = useState('');
    const[age,setAge] = useState('');  
    const [gender, setGender] = useState('');
    const [value, setValue] = useState("default");


    const handleGender = (e) => {
      setValue(e.target.value);
      setGender(e.target.value);
      console.log(value);
    }

    const clearFields = () => {
            setName('');
            setAge('');
            setGender('');
            console.log("clearFields")
    }

    const createStudent =(e) =>{
       // e.preventDefault(); PreventDefault avoids the getting default value after submitting
        const newStudent = { name, age, gender }

       axios.post("http://localhost:5000/student/add",newStudent).then(()=>{
            alert("Student Added Successfully");
          
            clearFields();

            // setName('');
            // setAge('');
            // setGender('');
       }).catch((err)=>{
           alert(err);
       })

    }

   

    return(
        <div>
            <div className="topic">
                <h1>Create Student</h1>
            </div>

            <div className="container">
                <form > 
                    <div class="from-group">
                        <label for="name" class="col-sm-2 col-form-label">Student Name</label>
                            <div>
                                <input type="text" readonly class="form-control" id="name" placeholder="Enter Student Name"
                                    onChange={(e)=>{ 
                                        setName(e.target.value);
                                    }}
                                />
                            </div>
                    </div>
                    
                    <div class="from-group">
                        <label for="age" class="col-sm-2 col-form-label">Student Age</label>
                            <div>
                                <input type="numeric" readonly class="form-control" id="age" placeholder="Enter Student Age"
                                    onChange={(e)=>{
                                        setAge(e.target.value);
                                    }}
                                />
                            </div>
                    </div>
                    
                    <div class="from-group">
                        <label for="gender" class="col-sm-2 col-form-label">Gender</label>
                            {/* <div>
                                <input type="text" class="form-control" id="gender" placeholder="Enter Student Gender"
                                    onChange={(e)=>{
                                        setGender(e.target.value);
                                    }}
                                />
                            </div>                     */}
                            <div>

                            
                                <select class="form-control" defaultValue={value} onChange={handleGender}>
                                     <option value="default" disabled hidden>  
                                        {/* Adding Place Hoder */}
                                        Select Your Gender
                                     </option>
                                     <option value="Male">Male</option>
                                     <option value="Female">Female</option>
                                </select>
                

                            </div>


                    </div>

                    {/* <div>
                        <MaleFemale/>
                    </div> */}
                    
                    <div>
                        <button type="submit" className="btn" onClick={(e) => createStudent(e)}>SUBMIT</button>
                    </div>
                </form>
            </div> 
        </div>      
    )

}

export default AddStudent;