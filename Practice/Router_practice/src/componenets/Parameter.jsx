import { useParams } from "react-router"

export default function Parameter(){
    let {userId} =useParams()
    return(
        <>
        <h1>UserId:{userId}</h1>
        </>
    )
}