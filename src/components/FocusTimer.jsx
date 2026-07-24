import TimeMode from "./TimeMode"
import Control from "./Control"
import '../styles/FocusTimer.css'
const FocusTimer = () => {

    return (
        <div className="focus-timer">
            <TimeMode />
            <Control />
        </div>
    )
}

export default FocusTimer