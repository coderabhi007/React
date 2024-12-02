import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
export default function Layout(){
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}