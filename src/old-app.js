import About from "./about";
import {Home ,HomeTwo} from "./home";
import { UserContext } from './context/userContext'
import { useState } from "react";
import Enquiry from "./enquiry";
import EnquiryOnChange from "./enquiry-onchange";
function App() {
  const [user,setUser]=useState({name:'rajesh',age:25,city:'Ajmer'});
  const [layout,setLayout]=useState('light')
  return (
    <>
      {/* <button onClick={()=>setLayout(layout==='light'?'dark':'light')}>{layout==='light'?'dark':'light'}</button>
      <UserContext.Provider value={layout}>
        <Home />
        <About />
      </UserContext.Provider> */}
      {/* <Enquiry/> */}
      <EnquiryOnChange/>
    </>
  )
}
export default App;