import Button from "./Button"
import CountCycle from "./CountCycle"
import Music from "./Music"
import '../styles/Control.css'

const Control = ({startTimer, cycle, changeCycle, clickNextButton, clickBackButton}) => {

    return (
        <div className="control">
            <Music />
            <div className="control-buttons">
                <Button className="reverse-button" onClick = {clickBackButton}/>
                <Button className="pause-button" onClick = {startTimer}/>
                <Button className="next-button"  onClick = {clickNextButton}/>
            </div>
            <CountCycle cycle = {cycle} changeCycle = {changeCycle}/>
        </div>
    )
}

export default Control