export default function addOperator(currentInputs, display, operator){
  let newInputs = [...currentInputs];
  let newDisplay = display;

  switch(currentInputs.length){
    case 0:
      newInputs[0] = display;
      newInputs[1] = operator;
      newDisplay = 0;
      break;
    case 1:
      newInputs[0] = display;
      newInputs[1] = operator;
      break;
    case 2:
      newInputs[1] = operator;
      break;
    case 3:
      newDisplay = eval(`${newInputs[0]} ${newInputs[1]} ${newInputs[2]}`);
      newInputs[0] = eval(`${newInputs[0]} ${newInputs[1]} ${newInputs[2]}`);
      newInputs[1] = operator;
      delete newInputs[2];
      break;
    default:
      console.log(`Error: addOperator: ${operator}`);
  }

  return [newInputs, newDisplay];
}