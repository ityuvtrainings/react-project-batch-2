import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./page/home";
import About from "./page/about"
import Contact from "./page/contact"
import Layout from "./Layout/layout";
import City from "./page/city";

function App() {//1
  const rountlist=[
    {
      path:'Ajmer',
      element:<City city={'Ajmer'}/>
    },
     {
      path:'Jaipur',
      element:<City city={'Jaipur'}/>
    },
     {
      path:'Delhi',
      element:<City city={'Delhi'}/>
    },
    {
      path:'Jodhpur',
      element:<City city={'Jodhpur'}/>
    }
  ]
  return (
    <>
      <Layout>
          <Routes>
            {rountlist.map((item)=>
             <Route path={item.path} element={item.element} />
            )}
          </Routes>
      </Layout>
    </>
  )
}
export default App;