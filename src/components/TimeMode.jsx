import React from "react"
import '../styles/time-mode.css'
const TimeMode = ({props}) => {
    const { time, mode} = props
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        if (secs < 10) {
            return `${mins}:0${secs}`
        }
        return `${mins}:${secs}`
    };

    return (
        <div className="time-mode">
            <p className="time-mode-p" mode = {mode}>Time Mode: {mode}</p>
            <h1 className="time-mode-h1">{formatTime(time)}</h1>
        </div>
    )
}

export default TimeMode