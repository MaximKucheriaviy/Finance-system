export function grafickCalcolation ({income, outcome, target, time, type, startDate}) {
    const result = {};
    if(type === "sum"){
        result.monthTotalIncome = income - outcome;
        result.monthRecomendedIncome = (result.monthTotalIncome / 5) * 2;
        result.recomendedTime = Math.ceil(target / result.monthRecomendedIncome);
    }
    const month = new Date(0);
    month.setFullYear(month.getFullYear() + Math.floor(result.recomendedTime / 12));
    month.setMonth(month.getMonth() + result.recomendedTime % 12);
    const finalDate = new Date(month.getTime() + startDate);
    console.log(finalDate);
}
