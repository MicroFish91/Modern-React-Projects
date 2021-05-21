function ScoreRow(props) {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.score}</td>
    </tr>
  )
}

export default ScoreRow;