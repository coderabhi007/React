import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './componenets/Home.jsx'
import About from './componenets/About.jsx'
import Contact from './componenets/Contact.jsx'
import Api from './componenets/Api.jsx'
import Parameter from './componenets/Parameter.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
let router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home/>}/>
      <Route path="About" element={<About/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="Api" element={<Api/>}/>
      <Route path="User/:userId" element={<Parameter/>}/>
    </Route>
));
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}>

  </RouterProvider>
  </StrictMode>,
)
