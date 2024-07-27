import {useEffect, useState} from "react"


//make a custom hook, which would call the API to use currency info
function useCurrencyInfo(currency) {

    const [data, setData] = useState({})

    useEffect(()=> { //useEffect needs 2 things, a callback and a dependency array

        
        fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/@{currency}.json`)
    
    .then((res) => res.json() )
    .then( (res) => setData(res[currency] ) )
    console.log(data);
    

    }, [currency]) 
    console.log(data);

    return data
}

export default useCurrencyInfo;

//and that's how you design a custom hook