import { useState, useEffect, useRef} from "react"
import lofi from "../assets/Detskie_pesni_Spokojjnaya_fonovaya_muzyka_LO-FI_BEATS_Chillhop_Music_Japanese_Lofi_Lo_Fi_Hip_Hop_-_Lou-ajj_Ritmy_dlya_Meditacii_79645134.mp3"
import TimeMode from "./TimeMode"
import Control from "./Control"
import Track from "./Track"
import '../styles/FocusTimer.css'
const FocusTimer = () => {
    
    const [time, setTime] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState('Work')
    const [cycle, setCycle] = useState(() => {
        const savedCycles = localStorage.getItem('cycle')
        if(savedCycles){
            return JSON.parse(savedCycles)
        }
        return 1

    })
    const [completedCycle, setCompletedCycle] = useState(0)
    const audioRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const [tracks, setTracks] = useState([
        {id: 1, title: 'Lofi - 1', prew: './src/assets/lofi__prew-1.jpg', time: '2:30', music: 'src/assets/Chill_Hip-Hop_Beats_-_Long_Travel_73622991.mp3'},
        {id: 2, title: 'Lofi - 2', prew: './src/assets/lofi__prew-2.jpg', time: '1:30', music: 'src/assets/Detskie_pesni_Spokojjnaya_fonovaya_muzyka_LO-FI_BEATS_Chillhop_Music_Japanese_Lofi_Lo_Fi_Hip_Hop_-_Lou-ajj_Ritmy_dlya_Meditacii_79645134.mp3'},
        {id: 3, title: 'Lofi - 3', prew: './src/assets/lofi__prew-3.jpg', time: '3:30', music: 'src/assets/kirpichnye-pereulki-2-fb419d.mp3'}
    ])
    const [selectedTrack, setSelectedTrack] = useState(lofi)


    

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

    useEffect(() => {
        localStorage.setItem('cycle', JSON.stringify(cycle))
    }, [cycle])

    const changeCycle = (newCycle) => {
        setCycle(newCycle) 
        console.log(cycle)
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
    const openClick = () => {
        if(isOpen){
            setIsOpen(false)
        }else {
            setIsOpen(true)
        }
        console.log(isOpen)
    }
    const selectTracks = (track) => {
        setSelectedTrack(track.music)
        console.log (selectedTrack)
    }   



    return (
        <div className="focus-timer">
            <button onClick={openClick} className="choose-track" >Выбрать трек</button>
                {isOpen && (
                <div className="div__overflow">
                    {tracks.map((track) => (
                    <Track
                        key={track.id}
                        title={track.title}
                        id={track.id}
                        prew={track.prew}
                        time={track.time}
                        onSelect={() => selectTracks(track)}
                    />
                    ))}
                </div>
                )}
            <TimeMode props={{ time, mode}} />
            <Control 
                isRunning={isRunning} 
                startTimer={startTimer} 
                cycle = {cycle} 
                changeCycle = {changeCycle} 
                clickNextButton = {clickNextButton}
                clickBackButton = {clickBackButton}
                rengeVolume = {rengeVolume}
                title = {tracks.title}
            />
            <audio ref = {audioRef} src = {selectedTrack} loop autoPlay/>
        </div>
    )
}

export default FocusTimer