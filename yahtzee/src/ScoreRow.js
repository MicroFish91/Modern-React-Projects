import './ScoreRow.css';

function ScoreRow({ id, locked, score, title, lockScore }) {
  function handleClick(){
    lockScore(id, score);
  }

  return (
    <tr className={ (!locked) ? "ScoreRow" : "ScoreRow-locked" } onClick={ (!locked) && handleClick } >
      <td>{title}</td>
      <td>{score}</td>
    </tr>
  )
}

export default ScoreRow;