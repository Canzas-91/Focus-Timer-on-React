import styles from "../styles/Form.module.css";

const Form = (props) => {
  const { changeTitle, value, addedTracks, changeTimes } = props;

  return (
    <form className={styles.form}>
      <input
        type="text"
        className={styles["form__track-title"]}
        value={value}
        onChange={(event) => changeTitle(event.target.value)}
      />
      <input
        type="time"
        className={styles["form__track-time"]}
        value={value}
        onChange={(event) => changeTimes(event.target.value)}
      />
      <button type="button" onClick={addedTracks}>
        Добавить
      </button>
    </form>
  );
};
export default Form;
