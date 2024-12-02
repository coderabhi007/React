import { useState } from 'react'
import useCurrancyConvert from './useCurrancyConvert'
import InputBox from './InputBox'
function App() {
let [from,setForm]=useState("usd")
let [to,setTo]=useState("inr")
let [amount,setAmount]=useState(0)
let[convert,setConvert]=useState(0)
let data=useCurrancyConvert(from)
let key=data?Object.keys(data):[]

  function converetd(){
    let ans=amount*data[to];
    setConvert(ans)
  }
  let swap=()=>(
    setForm(to),
    setTo(from),
    setAmount(convert),
    setConvert(amount)
  )
return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://media.istockphoto.com/id/2152056576/photo/turkish-lira-bills-over-financial-chart-background.jpg?s=2048x2048&w=is&k=20&c=jjw04rdTjRCOekIUc_HynK1RF_eryhSt66ssbkbQQHc=')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      converetd();
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          currancy={from}
                          amount={amount}
                          onChangeAmount={()=>(
                            setAmount((amount)
))}
                        onChangeCurrancy={()=>(
                          setForm(from)
                        )}
                        data={key}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          currancy={to}
                          amount={convert}
                          data={key}
                          onChangeAmount={()=>setConvert(convert)}
                          onChangeCurrancy={()=>setTo(to)}
                          amountDisable
                          
                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert from {from} to {to}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
