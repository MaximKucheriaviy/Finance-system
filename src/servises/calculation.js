export const getSavedCash = (income, outcome) => {
    return ((income - outcome) / 5 ) * 2
}

export const monthCount = (income, target) => {
    return target / income
}