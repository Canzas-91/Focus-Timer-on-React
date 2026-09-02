import styles from "../styles/CountCycle.module.css";

const CountCycle = ({ cycle, changeCycle }) => {
  return (
    <div className="count-cycle">
      <select
        className={styles["timer__theme"]}
        value={cycle}
        onChange={(event) => {
          changeCycle(Number(event.target.value));
        }}
      >
        <option value="1">1 цикл</option>
        <option value="2">2 цикла</option>
        <option value="3">3 цикла</option>
        <option value="4">4 цикла</option>
      </select>
    </div>
  );
};

export default CountCycle;
