import './Box.css';

function Box({ color, id, height, width, removeBox }) {
  const divStyle = {
    height: `${height}px`,
    width: `${width}px`,
    backgroundColor: color
  }

  function handleClick(){
    removeBox(id);
  }
  
  return (
    <div className="Box">
      <div className="Box-color" style={divStyle} ></div>
      <button onClick={handleClick}>Remove Box</button>
    </div>
  )
}

export default Box;