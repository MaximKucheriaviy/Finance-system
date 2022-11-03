export const DateShow = ({date}) => {
    const showDate = new Date(date);
    return <div>
        <p>{showDate.getFullYear()}</p>
        <p>{showDate.getMonth() + 1}</p>
        <p>{showDate.getDate()}</p>
    </div>    
}