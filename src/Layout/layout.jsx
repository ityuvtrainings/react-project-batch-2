import Footer from "./footer";
import Heading from "./header";
import { Route, BrowserRouter, Routes } from "react-router-dom";
const Layout = (props) => {
    
    return (
        <>
            <Heading />
            <BrowserRouter>
                {props.children}
            </BrowserRouter>
            <Footer />
        </>
    )
}
export default Layout;