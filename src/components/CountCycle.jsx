import "../styles/CountCycle.css";

const CountCycle = () => {
    return (
        <div className="count-cycle">
            <select className="timer__theme">
                <option value="1">1 цикл</option>
                <option value="2">2 цикла</option>
                <option value="3">3 цикла</option>
                <option value="4">4 цикла</option>
            </select>
        </div>
    )
}

export default CountCycle;