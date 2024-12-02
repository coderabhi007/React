import { useState } from "react"
export default function LudoBoard(){
    let [moves,setMoves] =useState({blue:0,red:0,Green:0,yellow:0});
    function blue(){
        setMoves((prev)=>{
            return {...prev,blue:prev.blue+1};
        })
       }
       function Green(){
        setMoves((prev)=>{
            return {...prev,Green:prev.Green+1};
        })
       }
       function yellow(){
        setMoves((prev)=>{
            return {...prev,yellow:prev.yellow+1};
        })
       }
       function red(){
        setMoves((prev)=>{
            return {...prev,red:prev.red+1};
        })
       }
    return(
       
     <>
        <p>Game begin</p>
        <div className="board">
            <p>Blue moves={moves.blue}</p>
            <button style={{backgroundColor :"blue"}} onClick={blue}>+1</button>
            <p>red moves={moves.red}</p>
            <button style={{backgroundColor :"red"}} onClick={red}>+1</button>
            <p>yellow moves={moves.yellow}</p>
            <button style={{backgroundColor :"yellow"}} onClick={yellow}>+1</button>
            <p>Green moves={moves.Green}</p>
            <button style={{backgroundColor :"green"}} onClick={Green}>+1</button>
        </div>
        </>
    );
}