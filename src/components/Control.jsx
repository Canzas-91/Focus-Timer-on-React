import Button from "./Button"
import CountCycle from "./CountCycle"
import Music from "./Music"
import '../styles/Control.css'
import { clsx } from 'clsx';

const Control = ({startTimer, cycle, changeCycle, clickNextButton, clickBackButton, rengeVolume, isRunning}) => {

    return (
        <div className="control">
            <Music rengeVolume = {rengeVolume}/>
            <div className="control-buttons">
                <Button className="reverse-button" onClick = {clickBackButton}/>
                <Button className={clsx({
                        'play-button' : isRunning === false,
                        'pause-button' : isRunning === true
                    })} 
                    onClick = {startTimer}/>
                <Button className="next-button"  onClick = {clickNextButton}/>
            </div>
            <CountCycle cycle = {cycle} changeCycle = {changeCycle}/>
        </div>
    )
}

export default Control