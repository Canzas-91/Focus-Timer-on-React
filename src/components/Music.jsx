//Topic: CSS-modules

// Стили в таком виде почти никогда не используются, потому что каждый импорт css файла добавляет его к бандлу как будто его еще там даже если это уже N-ный файл с импортом этого CSS
// Куда более часто используемый подход CSS-modules - читай ниже
import "../styles/Music.css";

const Music = ({rengeVolume}) => {

    return (
        <div className="music">
            <input type="range" name="volume" min="0" max="100" className="volume-slider" onChange={(event) => {rengeVolume(Number(event.target.value))}}/>
            <p className="music-p">Lofi Radio</p>
        </div>
    )
}



export default Music


// https://vite.dev/guide/features#css-modules
// В таком виде Vite по умному импортирует модуль без дублей
// import styles from "../styles/Music.module.css";

// const Music = ({rengeVolume}) => {

//     return (
//         <div className={styles.music}>
//             <input type="range" name="volume" min="0" max="100" className={styles.volumeSlider} onChange={(event) => {rengeVolume(Number(event.target.value))}}/>
//             <p className={styles.musicP}>Lofi Radio</p>
//         </div>
//     )
// }

// export default Music