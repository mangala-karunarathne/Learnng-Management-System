import './App.css';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import Header from './components/Header';
import AddStudent from './components/Addstudent';
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Header/>
      <AddStudent/>
    </div>
  )
}

export default App;   
