
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Pages/Login';
import SignupForm from './Pages/Signup'
import Stocktable from './Stocktable';
import Inventory from './Pages/inventory';
import Dashboard from './Pages/Dashboard';
import Vendor from './Pages/vendor'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <Routes >
          {/* <Route path="/" element={(<><Slider/></>)}/> */}
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<SignupForm/>} />
        <Route path="/Stocktable" element={<Stocktable />} />
        <Route path="/Dashboard" element={<Dashboard />} /> 
        <Route path="/Inventory" element={<Inventory/>} /> 
        <Route path="/Vendors" element={<Vendor/>} />         
       
        </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
