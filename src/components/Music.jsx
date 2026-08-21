import "../styles/Music.css";


const Music = ({rengeVolume}) => {
    return (
        <div className="music">
            <input type="range" name="volume" min="0" max="100" className="volume-slider" onChange={(event) => {rengeVolume(Number(event.target.value))}}/>
            <p className="music-p">Music</p>
        </div>
    )
}

export default Music