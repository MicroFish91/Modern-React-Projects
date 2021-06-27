export default function plusOrMinus(currentInputs, display){
  let newInputs = [...currentInputs];
  let newDisplay = display;

  switch(currentInputs.length){
    case 0:
      newDisplay = (parseFloat(display) * -1).toString();
      break;
    case 1:
      newInputs[0] = (parseFloat(display) * -1).toString();
      newDisplay = (parseFloat(display) * -1).toString();
      break;
    case 2:
      newInputs[2] = (parseFloat(display) * -1).toString();
      newDisplay = (parseFloat(display) * -1).toString();
      break;
    case 3:
      newInputs[2] = (parseFloat(display) * -1).toString();
      newDisplay = (parseFloat(display) * -1).toString();
      break;
    case 4:
      newInputs[0] = (parseFloat(display) * -1).toString();
      delete newInputs[1];
      delete newInputs[2];
      delete newInputs[3];
    default:
      console.log('Error: PM-Def Should not trigger');
  }

  return [newInputs, newDisplay];
}