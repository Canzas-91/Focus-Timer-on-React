import { useState, useEffect, useRef} from "react"
import lofi from "../assets/Detskie_pesni_Spokojjnaya_fonovaya_muzyka_LO-FI_BEATS_Chillhop_Music_Japanese_Lofi_Lo_Fi_Hip_Hop_-_Lou-ajj_Ritmy_dlya_Meditacii_79645134.mp3"
import TimeMode from "./TimeMode"
import Control from "./Control"
import '../styles/FocusTimer.css'
const FocusTimer = () => {
    
    const [time, setTime] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState('Work')
    const [cycle, setCycle] = useState(1)
    const [completedCycle, setCompletedCycle] = useState(0)
    const [clickingButton, setClickingButton] = useState()
    const audioRef = useRef(null)
    

    useEffect(() => {
        if (isRunning) {
                audioRef.current.play()
                const timer= setInterval(() => {
                    setTime((time) => {
                        if (time <= 1){
                            if (mode === 'Work'){
                                setMode('Break')
                                return (5 * 60)
                            }else{
                                if (cycle === (completedCycle + 1)) {
                                    setIsRunning(false)
                                    setTime(25 * 60)
                                    setMode('Work')
                                    setCompletedCycle((upCycle) => {
                                    return upCycle + 1
                                })
                                }else{
                                    setMode('Work')
                                    setTime(25 * 60)
                                }
                                return audioRef.current.pause()
                            }
                        }
                        return time - 1
                    });
                }, 1000);
                return () => {clearInterval(timer)}
        }
        return audioRef.current.pause()
    },[isRunning, mode])

    const changeCycle = (newCycle) => {
        setCycle(newCycle) 
    }

    const clickNextButton = () => {
        if (audioRef.current){
            audioRef.current.currentTime += 5
        }
    }
    const clickBackButton = () => {
        if (audioRef.current){
            audioRef.current.currentTime -= 5
        }
    }
    const rengeVolume = (volume) => {
        volume = volume / 100;
        audioRef.current.volume = volume
    }
    
    const startTimer = () => {
        if (!isRunning) {
            setIsRunning(true);
        }else {
            setIsRunning(false);
        }
    }


    return (
        <div className="focus-timer">
            <TimeMode props={{ time, mode}} />
            <Control 
                isRunning={isRunning} 
                startTimer={startTimer} 
                cycle = {cycle} 
                changeCycle = {changeCycle} 
                clickNextButton = {clickNextButton}
                clickBackButton = {clickBackButton}
                rengeVolume = {rengeVolume}
            />
            <audio ref = {audioRef} src = {lofi} loop/>
        </div>
    )
}

export default FocusTimer