import {NavLink} from 'react-router'
export default function Header(){
    return(
        <div>
        <NavLink
        to=""
        >
        home
        </NavLink>
        <NavLink  to="About">
         About
        </NavLink>
        <NavLink
        to="Contact"
        >Contact</NavLink>
        <NavLink
        to="Api"
        >Api</NavLink>
        </div>
    )
}