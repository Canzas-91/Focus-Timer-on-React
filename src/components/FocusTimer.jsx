import { useState, useEffect } from "react"
import TimeMode from "./TimeMode"
import Control from "./Control"
import '../styles/FocusTimer.css'
const FocusTimer = () => {
    const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
    const [isRunning, setIsRunning] = useState(false);

    
    useEffect(() => {
        if (isRunning) {
            const timer = setInterval(() => {
                setTime((time) => {
                    if (time <= 1){
                        setIsRunning(false)
                        return (25 * 60)
                    }
                    return time - 1
                });
            }, 1000);

            return () => {clearInterval(timer)};
        }
    },[isRunning])
    

    
    const startTimer = () => {
        if (!isRunning) {
            setIsRunning(true);
        }else {
            setIsRunning(false);
        }
        console.log(isRunning)
    }


    return (
        <div className="focus-timer">
            <TimeMode props={{ time }} />
            <Control isRunning={isRunning} startTimer={startTimer} />
        </div>
    )
}

export default FocusTimer