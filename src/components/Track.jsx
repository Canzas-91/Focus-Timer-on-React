import "../styles/Track.css"

const Track = (props) => {
    const {tracks, id, prew, title, time, onSelect} = props

    return (
        <div className="track" id = {id} onClick={onSelect}>
            <img className="track__prew" src={prew}/>
            <div className="track__info">
                <h3 className="track__info-title">{title}</h3>
                <p className="track__info-time">{time}</p>
            </div>
        </div>
    )
}
export default Track