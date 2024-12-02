import { useState } from "react";

function CommnetsForms({addCommnet}){
    let [formData,setFormData]=useState({UserName:"",
        Remark:"",
        Rating:undefined,
    })
    function handelData(event){
        setFormData((currData)=>(
            {
               ...currData,
               [event.target.name]:event.target.value, 
            }
        ))
    }
    function submit(event){
        event.preventDefault();
        addCommnet(formData)
        setFormData({ UserName: "", Remark: "", Rating: undefined })
    }
    return(
       <div>
        <h4>Give a Comment!</h4>
        <form>
            <label htmlFor="UserName">UserName</label>
            <input type="text" placeholder="UserName" name="UserName" value={formData.UserName} onChange={handelData} id="UserName"/>
            <br /><br /><br /><br />
            <textarea name="Remark" id="" value={formData.Remark} onChange={handelData} >Remarks</textarea>
            <br /><br /><br /><br />
            <label htmlFor="Rating">Rating</label>
            <input type="number" placeholder="rating" min={1} max={5} value={formData.Rating} name="Rating" id="Rating"onChange={handelData}/>
            <br /><br /><br /><br />
            <button onClick={submit}>submit</button>
        </form>
       </div>
    );
}
export default CommnetsForms