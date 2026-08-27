//Topic: React.memo

import React from "react"
import '../styles/time-mode.css'


// Не стоит делать такую передачу пропсов - только по одному аля
// <TimeMode time={time} mode={mode} /> ...
// ...
// const TimeMode = ({time, props}) => {
const TimeMode = ({props}) => {
    const { time, mode} = props

    // Этот console.log будет выводиться каждый раз когда ре-рендерится компонент
    // Сейчас он будет выводиться каждый раз когда ре-рендерится родительский компонент, а этого надо избегать
    console.log(`TimeMode render with props time=${time} and mode=${mode}`);
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
// // React.memo - один из ключевых механизмов React, который позволяет избежать
// // излишней перерисовки компонент  === основной проблемы в React
// const TimeMode = React.memo(({ time, mode}) => {
//     // Этот console.log будет выводиться каждый раз когда ре-рендерится компонент
//      // Сейчас он будет выводиться только если time ИЛИ mode изменились
//     console.log(`TimeMode render with props time=${time} and mode=${mode}`);

//     const formatTime = (seconds) => {
//         const mins = Math.floor(seconds / 60);
//         const secs = seconds % 60;
//         if (secs < 10) {
//             return `${mins}:0${secs}`
//         }
//         return `${mins}:${secs}`
//     };

//     return (
//         <div className="time-mode">
//             <p className="time-mode-p" mode = {mode}>Time Mode: {mode}</p>
//             <h1 className="time-mode-h1">{formatTime(time)}</h1>
//         </div>
//     )
// })

export default TimeMode