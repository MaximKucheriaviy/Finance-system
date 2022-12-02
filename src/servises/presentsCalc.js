export const calculeateWeek = (deposite, presnts, termin) => {;
    if(termin === "1week"){
        presnts /= 4;
    }
    else if(termin === "2weeks"){
        presnts = (presnts / 4) * 2;
    }
    else if(termin === "3weeks"){
        presnts = (presnts / 4) * 3;
    }
    console.log();
    presnts /= 100;
    return {
        totalIncome: Math.floor(deposite + deposite * presnts, 2),
        pureIncome: Math.floor(deposite * presnts, 2),
    }
}


export const calculeateMonth = (deposite, presnts, termin) => {
    presnts /= 100;
    if(termin === "1month"){
       return calculatePresents(deposite, presnts, 1);
    }
    else if(termin === "3monthes"){
        return calculatePresents(deposite, presnts, 3);
    }
    else if(termin === "6monthes"){
        return calculatePresents(deposite, presnts, 6);
    }
    else if(termin === "9monthes"){
        return calculatePresents(deposite, presnts, 9);
    }
    else if(termin === "1year"){
        return calculatePresents(deposite, presnts, 12);
    }
}



function calculatePresents(deposite, presnts, termin){
    let result = 0;
    console.log(deposite, presnts, termin);
        for(let i = 0; i < termin; i++){
            if(i === 0){
                result += +(deposite + deposite * presnts).toFixed(2);
            }
            else{
                result += +(result * presnts).toFixed(2);
            }
        }
        return {
            totalIncome: +(result).toFixed(2),
            pureIncome: +(result - deposite).toFixed(2),
        }
}