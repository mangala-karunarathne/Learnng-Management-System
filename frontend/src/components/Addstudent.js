import React, {useState} from "react";


 function AddStudent(){
    return(

        <div className="container">
            <form>
                
                
                <div class="from-group">
                    <label for="name" class="col-sm-2 col-form-label">Student Name</label>
                        <div >
                        <input type="text" readonly class="form-control" id="name" placeholder="Enter Student Name"/>
                        </div>
                </div>
                
                
                <div class="from-group">
                    <label for="age" class="col-sm-2 col-form-label">Student Age</label>
                        <div >
                        <input type="text" readonly class="form-control" id="age" placeholder="Enter Student Age"/>
                        </div>
                </div>
                
                
                <div class="from-group">
                    <label for="gender" class="col-sm-2 col-form-label">Gender</label>
                    <div >
                    <input type="text" class="form-control" id="gender" placeholder="Enter Student Gender"/>
                    </div>
                </div>
                
                
                <div class="from-group">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>

                
            </form>
        </div>
            
    )
}


export default AddStudent;