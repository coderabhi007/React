import { useState } from "react";



export default function Counter(){
    let [count,Setcounter]=useState(0);
   // console.log("Componenet is rerenderd");//if one value of component is changed then overall compnenet is rerenderd
    //console.log(`count=${count}`)
    function Increase(){
       // Setcounter(count+1);
      //  console.log(`inside the function count=${count}`)
      Setcounter((curr)=>{
        return curr+1;
      });
      Setcounter((curr)=>{
        return curr+1;
      });
      Setcounter((curr)=>{
        return curr+1;
      });//to work synchronously it has been done
       }
    return(<>
        <h1>{count}</h1>
        <button onClick={Increase}>click Here</button>
        </>
    );
}