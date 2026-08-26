import '../styles/Form.css'

const Form = (props) => {
    const {changeTitle, value, addedTracks, changeTimes} = props

    return (
        <form className="form">
            <input type="text" className="form__track-title" value={value} onChange={(event) => changeTitle(event.target.value)}/>
            <input type="time" className="form__track-time" value={value} onChange={(event) => changeTimes(event.target.value)}/>
            <button type = 'button' onClick={addedTracks}>Добавить</button>
        </form>
    )
}
export default Form