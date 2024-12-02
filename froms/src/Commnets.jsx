import { useState } from "react"
import CommnetsForms from "./CommnetsForms"
function Commnets(){
    let [commnets,setCommnets]=useState([])
    function addCommnet(commnet){
        setCommnets((curr)=>(
           [
                ...curr,
                commnet,
            ]        ))
    }
    return(
        <div>
            <h3>All Commnets</h3>
            {
                commnets.map((commnet,idx)=>(
                    <div key={idx}> 
                    <span>{commnet.Remark}</span>
                    <span>  {commnet.Rating}</span>
                    <br />
                    <span>-{commnet.UserName}</span>
                    </div>

                )

                )
            }
            <CommnetsForms addCommnet={addCommnet}/>
        </div>
    )
}
export default Commnets