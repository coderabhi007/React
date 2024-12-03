import  {Outlet}  from "react-router-dom"
import Header from "./componenets/Header"
import Fotter from "./componenets/Fotter"

function App() {


  return (
    <>
     <Header></Header>
     <Outlet></Outlet>
     <Fotter></Fotter>
    </>
  )
}

export default App
