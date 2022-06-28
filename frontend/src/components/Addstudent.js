import React, {useState} from "react";
import axios from "axios";


function AddStudent(){

    const[name,setName] = useState("");
    const[age,setAge] = useState("");
    const[gender,setGender] = useState("");

    function sentData(e){

        e.preventDefault();
        const newStudent = {

                name,
                age,
                gender

        }

       axios.post("http://localhost:5000/student/add",newStudent).then(()=>{
           alert("Student Added");
           setName("");
           setAge("");
           setGender("");


       }).catch((err)=>{
           alert(err)
       })

    }

    return(

        <div className="container">
            <form onSubmit={sentData}>
                
                
                <div class="from-group">
                    <label for="name" class="col-sm-2 col-form-label">Student Name</label>
                        <div >
                        <input type="text" readonly class="form-control" id="name" placeholder="Enter Student Name"
                        onChange={(e)=>{

                            setName(e.target.value);

                        }}/>
                        </div>
                </div>
                
                
                <div class="from-group">
                    <label for="age" class="col-sm-2 col-form-label">Student Age</label>
                        <div >
                        <input type="text" readonly class="form-control" id="age" placeholder="Enter Student Age"
                        onChange={(e)=>{

                            setAge(e.target.value);

                        }}/>
                        </div>
                </div>
                
                
                <div class="from-group">
                    <label for="gender" class="col-sm-2 col-form-label">Gender</label>
                        <div >
                        <input type="text" class="form-control" id="gender" placeholder="Enter Student Gender"
                        onChange={(e)=>{

                            setGender(e.target.value);

                        }}/>
                        </div>                    
                </div>
                
                
                <div >
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>


            </form>
        </div>
            
    )
}

export default AddStudent;