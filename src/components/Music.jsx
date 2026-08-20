import "../styles/Music.css";


const Music = () => {
    return (
        <div className="music">
            <input type="range" name="volume" min="0" max="100" className="volume-slider" />
            <p className="music-p">Music</p>
        </div>
    )
}

export default Music