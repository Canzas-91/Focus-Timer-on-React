import styles from "../styles/Time-mode.module.css";
const TimeMode = ({ props }) => {
  const { time, mode, completedCycle } = props;
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (secs < 10) {
      return `${mins}:0${secs}`;
    }
    return `${mins}:${secs}`;
  };

  return (
    <div className={styles.timeMode}>
      <p className={styles.timeModeP} mode={mode}>
        Time Mode: {mode}
      </p>
      <p className={styles["time-mode__count-cycle"]}>
        Прошло циклов: {completedCycle}
      </p>
      <h1 className={styles["time-mode-h1"]}>{formatTime(time)}</h1>
    </div>
  );
};

export default TimeMode;
