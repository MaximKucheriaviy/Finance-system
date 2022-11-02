export function grafickCalcolation ({income, outcome, target, time, type, startDate}) {
    const result = {};
    if(type === "sum"){
        result.monthTotalIncome = income - outcome;
        result.monthRecomendedIncome = (result.monthTotalIncome / 5) * 2;
        result.recomendedTime = Math.ceil(target / result.monthRecomendedIncome);
    }
    result.breakPoints = [];
    for(let i = 0; i < result.recomendedTime; i++){
        const month = new Date(0);
        month.setFullYear(month.getFullYear() + Math.floor((i + 1) / 12));
        month.setMonth(month.getMonth() + ((i + 1) % 12));
        const filnal = new Date(startDate + month.getTime()) ;
        result.breakPoints.push(createBreackPoint(filnal));
    }
    return result;
}


function createBreackPoint(data){
    return{
        data: data.getTime(),
        cash: null
    }
}

