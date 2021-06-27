import './Display.css';

const Display = ({ calcInputs, display }) => {
  const renderCalcInputs = () => {
    return (
      <>
        {calcInputs[0]}
        {calcInputs[1]}
        {calcInputs[2]}
        {calcInputs[3]}
      </>
    );
  }

  return (  
    <div className="Display">
      <div className="Display-top">{renderCalcInputs()}</div>
      <div className="Display-bottom">{display}</div>
    </div>
  );
}
 
export default Display;