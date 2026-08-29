import Button from "./Button"
import CountCycle from "./CountCycle"
import Music from "./Music"
import '../styles/Control.css'
import styles from"../styles/Buttons.module.css"
import { clsx } from 'clsx';

const Control = ({startTimer, cycle, changeCycle, clickNextButton, clickBackButton, rengeVolume, isRunning}) => {

    return (
        <div className="control">
            <Music rengeVolume = {rengeVolume}/>
            <div className="control-buttons">
                <Button className={`${styles.button} ${styles.reverse} ${styles.icon}`} onClick = {clickBackButton}/>
                <Button className={clsx(`${styles.button} ${styles.icon}`,{
                        [styles.play] : isRunning === false,
                        [styles.pause] : isRunning === true
                })}
                    onClick = {startTimer}/>
                <Button className={`${styles.button} ${styles.next} ${styles.icon}`}  onClick = {clickNextButton}/>
            </div>
            <CountCycle cycle = {cycle} changeCycle = {changeCycle}/>
        </div>
    )
}

export default Control