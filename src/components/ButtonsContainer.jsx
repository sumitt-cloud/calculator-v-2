import styles from './ButtonsContainer.module.css'
function ButtonsContainer({ onButtonClick }) {
  const buttons = ["C", "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", "/", "="];

  return (
    <div>
      {buttons.map((btn) => (
        <button key={btn} onClick={() => onButtonClick(btn)}
        className={styles.buttonsContainer}>
          {btn}
        </button>
      ))}
    </div>
  );
}

export default ButtonsContainer;
