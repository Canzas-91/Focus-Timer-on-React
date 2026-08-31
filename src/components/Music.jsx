import styles from "../styles/Music.module.css";
import { memo } from "react";

const Music = ({ rengeVolume }) => {
  return (
    <div className={styles.music}>
      <input
        type="range"
        name="volume"
        min="0"
        max="100"
        className={styles["volume-slider"]}
        onChange={(event) => {
          rengeVolume(Number(event.target.value));
        }}
      />
      <p className={styles["music-p"]}>Lofi Radio</p>
    </div>
  );
};

export default memo(Music);
