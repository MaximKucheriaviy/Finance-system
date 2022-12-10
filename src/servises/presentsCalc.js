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
    const tableData = [];
        for(let i = 0; i < termin; i++){
            tableData.push({month: i + 1});
            if(i === 0){
                result += +(deposite + deposite * presnts).toFixed(2);
                tableData[i].body = deposite;
                tableData[i].income = +(deposite * presnts).toFixed(2);
                tableData[i].total = result;
            }
            else{
                tableData[i].body = result;
                result += +(result * presnts).toFixed(2);
                tableData[i].income = +(result * presnts).toFixed(2);
                tableData[i].total = result;
            }
        }
        return {
            totalIncome: +(result).toFixed(2),
            pureIncome: +(result - deposite).toFixed(2),
            tableData
        }
}