import * as dice from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as converter from 'number-to-words';
import './Die.css';

function Die({ id, locked, toggleLock, value }) {
  function handleClick(){
    toggleLock(id);
  }
  const numberToWord = converter.toWords(value);
  const diceIcon = `faDice${numberToWord[0].toUpperCase() + numberToWord.slice(1)}`;
  return (
    <div className={(locked) ? "Die-locked" : "Die"} onClick={handleClick} >
      <FontAwesomeIcon icon={dice[diceIcon]} size="4x" />
    </div>
  )
}

export default Die;