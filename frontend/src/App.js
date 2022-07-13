import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import './App.css';
import Header from './components/Header';
import AddStudent from './components/Addstudent';//Location of AddStudent function
import AllStudent from './components/AllStudents';
import Home from './components/Home';

function App() {
  return (
    <Router>
        <div>
          <Header/>
          
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/add' element={<AddStudent/>}/>
            <Route exact path='/view' element={<AllStudent/>}/>
          </Routes>
         
        </div>
    </Router>
    
  )
}

export default App;   
