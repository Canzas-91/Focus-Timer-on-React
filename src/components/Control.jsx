import Button from "./Button"
import CountCycle from "./CountCycle"
import Music from "./Music"
import '../styles/Control.css'

const Control = ({ isRunning, startTimer }) => {

    return (
        <div className="control">
            <Music />
            <div className="control-buttons">
                <Button className="reverse-button" />
                <Button className="pause-button" onClick = {startTimer} />
                <Button className="next-button"  />
            </div>
            <CountCycle />
        </div>
    )
}

export default Control