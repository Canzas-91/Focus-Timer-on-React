import Button from "./Button"
import CountCycle from "./CountCycle"
import Music from "./Music"
import '../styles/Control.css'

// Тоже в норм, просто общий wrapper для компонент
const Control = ({startTimer, cycle, changeCycle, clickNextButton, clickBackButton, rengeVolume}) => {

    return (
        <div className="control">
            <Music rengeVolume = {rengeVolume}/>

            {
                // Выравнимание работает отлично, его можно докручивать, но как есть тоже хорошо
                // Внешне выглядит прям круто
                // Есть один вопрос по UI на подумать - как понять сколько циклов осталось? 
                // Мб го добавим: 
                // 1) надпись сколько циклов осталось (у тебя в select написано сколько циклов будет, но какой сейчас круг идет - хз)
                // 2) кнопку паузы чтобы выставить на исходное значение количество циклов + таймер в исходное значние
            }
            <div className="control-buttons">
                <Button className="reverse-button" onClick = {clickBackButton}/>
                {
                    // Придумай как менять className для pause/play button в зависимости от isRunning
                }
                <Button className="pause-button" onClick = {startTimer}/> 
                <Button className="next-button"  onClick = {clickNextButton}/>
            </div>
            <CountCycle cycle = {cycle} changeCycle = {changeCycle}/>
        </div>
    )
}

export default Control