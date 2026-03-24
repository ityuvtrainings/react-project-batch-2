import { Route, BrowserRouter, Routes, Link } from "react-router";
import Home from "./page/home";
import About from "./page/about"
import Contact from "./page/contact"
import Layout from "./Layout/layout";
import City from "./page/city";
import HookUseRef from "./page/use-ref";
import Counter from "./page/use-reducer";
import CounterCallBack from "./page/use-callback";
function App() {//1
  const rountlist=[
    {
      path:'Ajmer/:state/:place',
      element:<City city={'Ajmer'}/>
    },
     {
      path:'Jaipur/:state/:place',
      element:<City city={'Jaipur'}/>
    },
     {
      path:'Delhi/:state/:place',
      element:<City city={'Delhi'}/>
    },
    {
      path:'Jodhpur/:state/:place',
      element:<City city={'Jodhpur'}/>
    },
    {
      path:'home',
      element:<Home/>
    },
    {
      path:'useref',
      element:<HookUseRef/>
    },
    {
      path:'userreducer',
      element:<Counter/>
    },{
      path:'usecallback',
      element:<CounterCallBack/>
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
           {/* <Link to={'/Ajmer/Rajasthan/vaishalinagar'}>Ajmer</Link>
          <a href="/Jaipur/Rajasthan/vaishalinagar">Jaipur</a> */}
      </Layout>
    </>
  )
}
export default App;