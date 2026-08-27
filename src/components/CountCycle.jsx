import "../styles/CountCycle.css";

// Это норм, только лишний пропс убрать
const CountCycle = ({cycle, changeCycle}) => {
    return (


        <div className="count-cycle">
            <select className="timer__theme" onChange = {(event) => {changeCycle(Number(event.target.value))}}>
                <option value="1">1 цикл</option>
                <option value="2">2 цикла</option>
                <option value="3">3 цикла</option>
                <option value="4">4 цикла</option>
            </select>
        </div>
    )
}

export default CountCycle;