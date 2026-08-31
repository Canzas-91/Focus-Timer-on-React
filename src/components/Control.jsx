import Button from "./Button";
import CountCycle from "./CountCycle";
import Music from "./Music";
import styles from"../styles/Control.module.css";

const Control = ({
  startTimer,
  cycle,
  changeCycle,
  clickNextButton,
  clickBackButton,
  rengeVolume,
  isRunning,
}) => {
  return (
    <div className={styles.control}>
      <Music rengeVolume={rengeVolume} />
      <div className={styles["control-buttons"]}>
        <Button
        type = 'reverse'
          onClick={clickBackButton}
        />
        <Button
          type={isRunning ? "pause" : "play"}
          onClick={startTimer}
        />
        <Button
          type = 'next'
          onClick={clickNextButton}
        />
      </div>
      <CountCycle cycle={cycle} changeCycle={changeCycle} />
    </div>
  );
};

export default Control;
