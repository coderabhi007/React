
import './App.css'
import Lottory from './Lottory.jsx'
import { sum } from './helper.js';
function App() {
 let winCondition=(arr)=>{
  return sum(arr)===15;
 }

  return (
    <>
     <Lottory n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
