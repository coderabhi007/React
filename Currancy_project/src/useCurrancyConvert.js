import { useEffect, useState } from "react"

function useCurrancyConvert(currency="usd"){
    let [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then(
            (prev)=>(prev.json()).then((prev)=>(setData(prev[currency])))
        )
       
},[currency])
   
return data;
}
export default useCurrancyConvert