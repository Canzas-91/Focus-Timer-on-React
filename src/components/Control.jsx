import Button from "./Button"
import CountCycle from "./CountCycle"
import Music from "./Music"
import '../styles/Control.css'

const Control = () => {
    return (
        <div className="control">
            <Music />
            <div className="control-buttons">
                <Button className="start-button" />
                <Button className="pause-button" />
                <Button className="reverse-button" />
            </div>
            <CountCycle />
        </div>
    )
}

export default Control