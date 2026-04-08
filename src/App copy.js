import { Route,Routes,} from "react-router";
import Home from "./page/home";
import Layout from "./Layout/layout";
import City from "./page/city";
import HookUseRef from "./page/use-ref";
import Counter from "./page/use-reducer";
import CounterCallBack from "./page/use-callback";
import UseEffectEvents from "./page/usereffectevent"
import { useEffect } from "react";
import PasswordFieldUserId from "./page/PasswordFieldUserId";
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
    },
    {
      path:'usecallback',
      element:<CounterCallBack/>
    }
    ,{
      path:'useeffectEvent',
      element:<UseEffectEvents/>
    }
    ,{
      path:'PasswordFieldUserId',
      element:<PasswordFieldUserId/>
    }
  ]
  useEffect(()=>{
    console.log("Ajmer")
        localStorage.setItem('userdetails',JSON.stringify({name:'rajesh',age:25}))
        sessionStorage.setItem('userdata',JSON.stringify({name:'rajesh',age:25}))
        // sessionStorage.removeItem('userdata')
        // sessionStorage.clear()
        sessionStorage.setTimeout(() => {
          sessionStorage.removeItem('userdata')
        },8000 );

  },[])
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