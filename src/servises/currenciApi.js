export async function currensyUpdate(){
    const apiKey = 'bQu9zW9HnAWK0dcCtQP8BjYqnaDFWevMDzp5F21S'
    const currencyInfo = {
        updateDate: Date.now()
    }
    try{
        const responce = await fetch(`https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=UAH`)
        const data = await responce.json();
        currencyInfo.data = data.data;
        window.localStorage.setItem("currencyInfo", JSON.stringify(currencyInfo));
        return data.data;
    }
    catch(err){
        console.log(err);
    }
}

export const transformCurrency = (currecy) => {
    return (1 / currecy).toFixed(2);
}


export function suportedCodes(code){
    return code === "USD" || code === "EUR" || code === "GBP" || code === "CNY" || code === "PLN" || code === "CZK" 
}

/*
UAH
USD
EUR
GBP
PLN
CZK
CNY
*/