import { useState,useCallback,useEffect ,useRef} from 'react'


function App() {
  const [length,setLength]=useState(8)
  const [isChar,setIsChar]=useState(false)
  const [isNumber,setIsNumber]=useState(false)
  const [password,setPassword]=useState("")
  let passwordGenrator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYXabcsefghijklmnopqrstuvwxyz"
    if(isChar) str+="!@#$%^&*"
    if(isNumber) str+="0123456789"
    for(let i=0;i<length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
setPassword(pass);
console.log(pass)
  },[length,isChar,isNumber])
useEffect(()=>{passwordGenrator()},[length,isChar,isNumber,setPassword])
function copy(){
  passRef.current?.select()
  window.navigator.clipboard.writeText(password)
}
let passRef=useRef(null)
  return (
    <>
    <div className=' rounded-md w-3/6 mx-auto mt-10 p-4 bg-slate-800'>
     <h1 className="text-white text-4xl text-center ">
      Password Genrator
    </h1>
    <input type="text"  className='w-11/12 rounded-l-md  mt-5 mx-auto h-9' value={password} readOnly ref={passRef} />
    <button className='text-white bg-blue-700 rounded-r-md  h-10 hover:bg-sky-700' onClick={copy  }>copy</button>
    <br />
    <input type="range" name="" id="" 
    min={8}
    max={100}
    onChange={(e)=>(setLength(e.target.value))}
    className='mt-2 bg-blue-700'
    />
    <label htmlFor="" className='text-red-400 ml-3 mr-4'>length({length})</label>
    <input type="checkbox" name="" id="" className='' onChange={()=>(setIsNumber((prev)=>(!prev))
    )}/>
    
    <label htmlFor="Numbers" className='text-red-400 ml-2 mr-3'>Numbers</label>
    <input type="checkbox" name="" id="" onChange={()=>(setIsChar(
      (prev)=>(!prev))
    )}/>
    <label htmlFor="Numbers" className='text-red-400 ml-2 mr-3'>charchter</label>
    
    </div>
    </>
  )
}

export default App
