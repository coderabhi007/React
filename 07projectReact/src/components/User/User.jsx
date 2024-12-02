import { useParams } from "react-router-dom";
function User (){
   const {Userid}=useParams()
    return(
        <>
        <h3 className="text-center">User:{Userid}</h3>
        </>
    )
}
export default User;