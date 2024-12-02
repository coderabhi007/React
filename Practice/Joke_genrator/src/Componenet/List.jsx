import Button from "./button";
import React, { useState } from "react";
import Card from "./Card";


function List(){
  function  delete1 (key){
        joke.filter((id)=> id!=key)
    }
    const [joke,setJoke]=useState([])
function genrateJoke(){
        fetch("https://official-joke-api.appspot.com/jokes/random/")
        .then((data)=>data.json())
        .then((data)=>setJoke((prev)=>(
           [...prev,data]
        )))
}
    return(
        <>
            <Button genrateJoke={genrateJoke}/>
            
            {joke.map((joke1)=>(
                <Card setup={joke1.setup} punchline={joke1.punchline} key={joke.id} delete1={delete1}/>
            ))
            }
        </>
    )
}
export default List;