import './CalcButton.css';

const CalcButton = ({ text, color, span, updateDisplay }) => {
  const style = {
    width: (span) ? `${20 * span}%` : '20%',
    backgroundColor: color
  }

  const handleClick = () => {
    // updateDisplay();
  }

  return ( 
    <div className="CalcButton" style={style} onClick={handleClick}>
      {text}
    </div>
  );
}
 
export default CalcButton;