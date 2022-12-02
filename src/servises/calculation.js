export function grafickCalcolation ({income, outcome, target, date, type, startDate}) {
    const result = {};
    if(type === "sum"){
        result.monthTotalIncome = income - outcome;
        result.monthRecomendedIncome = (result.monthTotalIncome / 5) * 2;
        result.recomendedTime = Math.ceil(target / result.monthRecomendedIncome);
    }
    else if(type === "time"){
        result.monthTotalIncome = income - outcome;
        result.monthRecomendedIncome = (result.monthTotalIncome / 5) * 2;
        const newDate = new Date(date - startDate);
        result.recomendedTime = Math.floor((newDate.getFullYear() - 1970) * 12) + newDate.getMonth();

    }
    else if(type === "total"){
        result.monthTotalIncome = income - outcome;
        const newDate = new Date(date - startDate);
        result.recomendedTime = Math.floor((newDate.getFullYear() - 1970) * 12) + newDate.getMonth();
        result.monthRecomendedIncome = target / result.recomendedTime;
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


export const ifTotalPosible = (target, date, startDate, income, outcome) => {
    console.log(target, date, startDate, income);
    const newDate = new Date(date - startDate);
    console.log(newDate.getFullYear(), newDate.getMonth());
    const recomendedTime = Math.floor((newDate.getFullYear() - 1970) * 12) + newDate.getMonth();
    if(target / recomendedTime > income - outcome){
        return false;
    }
    return true;
}

