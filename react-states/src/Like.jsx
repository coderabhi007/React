import { useState } from "react";
export default function Like(){
    let [isLiked,setIsliked]=useState(false);
    let change=()=>{
        setIsliked(!isLiked);
    }
    let styles={color:"red"};
    return(
        <p onClick={change} >{
            isLiked ? <i className="fa-solid fa-heart" style={styles}></i>:<i className="fa-regular fa-heart"></i>}
        </p>
    )
}