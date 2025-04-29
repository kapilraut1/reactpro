import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const[data, setData]=useState({});
    useEffect(()=>{
fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).then((res)=> res.json( ))
.then((res)=> setData(res[currency]))
    },[currency])
    console.log(data);
   // + https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/{endpoint}/currencies/{currencyCode}
   //https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json

    return data;
}

export default useCurrencyInfo;