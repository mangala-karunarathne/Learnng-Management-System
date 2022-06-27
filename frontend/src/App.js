import './App.css';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import Header from './components/Header';
import AddStudent from './components/AddStudent';//Location of AddStudent function
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <Router>
        <div>
          <Header/>
          <Routes>
              <Route exact path='/add' element={<AddStudent/>}/>
          </Routes>
         
        </div>
    </Router>
    
  )
}

export default App;   
