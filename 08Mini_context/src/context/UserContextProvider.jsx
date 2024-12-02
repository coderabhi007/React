import React from "react";
import UserContext from "./UserContext";
//acess is given here for all elments
//we are using tags to giving acces to elments,states
const UserContextProvider =({children}) =>{
    const [user,setUser]=React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}
 
export default UserContextProvider