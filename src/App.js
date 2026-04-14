import { Route, Routes, BrowserRouter } from "react-router";
import Login from "./auth/login";
import SignUp from "./auth/signup";
import {useState } from "react";
import Home from "./website/home"
import About from "./website/about"
import Contact from "./website/contact"
import ToDo from "./todo";

function App() {
  const [auth, setauth] = useState(false);
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          {auth === false && (
            <>
              <Route path="/" element={<Login setauth={setauth} />} />
              <Route path="/login" element={<Login setauth={setauth} />} />
              <Route path="signup" element={<SignUp />} />
            </>
          )}
            {auth === true && (
            <>
             <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </>
          )}

        </Routes>
      </BrowserRouter> */}
    <ToDo/>
    </>
  )
}
export default App;