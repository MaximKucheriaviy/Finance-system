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
    if(termin === "1week"){
        presnts /= 4;
        deposite *= presnts;
    }
}