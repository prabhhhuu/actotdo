import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { useState } from "react";

function App() {

      const [Ruser,setNewRuser] = useState([
        {
            name:"Prabhu",
            pass:"@123"
        }
    ])


  return (

    <BrowserRouter>
    <Routes>
      <Route path="/"
       element={<Login Ruser={Ruser} setNewRuser={setNewRuser}/>}></Route>
      <Route path="/signup" element={<Signup Ruser={Ruser} setNewRuser={setNewRuser}/>} ></Route>
      <Route path="/Landing" element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
