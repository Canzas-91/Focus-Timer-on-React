import styles from "../styles/Buttons.module.css";
import clsx from "clsx";
const Button = (props) => {
  const { onClick, title, type } = props;
  return (
    <button
      className={clsx(`${styles["buttons-control"]}`, {
        [styles.track]: type === "track",
        [styles.reset]: type === "reset",
        [styles.reverse]: type === "reverse",
        [styles.play]: type === "play",
        [styles.pause]: type === "pause",
        [styles.next]: type === "next",
      })}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
