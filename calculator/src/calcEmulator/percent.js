export default function percent(currentInputs, display){
  let newInputs = [...currentInputs];
  let newDisplay = display;

  switch(currentInputs.length){
    case 0:
      newInputs[0] = 0;
      newDisplay = 0;
      break;
    case 1:
      newInputs[0] = 0;
      newDisplay = 0;
      break;
    case 2:
      newInputs[2] = (parseFloat(display) / 100).toString();
      newDisplay = (parseFloat(display) / 100).toString();
      break;
    case 3:
      newInputs[2] = (parseFloat(display) / 100).toString();
      newDisplay = (parseFloat(display) / 100).toString();
      break;
    case 4:
      newInputs[0] = (parseFloat(display) / 100).toString();
      newDisplay = (parseFloat(display) / 100).toString();
      delete newInputs[1];
      delete newInputs[2];
      delete newInputs[3];
    default:
      console.log('Error: Per-Def Should not trigger');
  }

  return [newInputs, newDisplay];
}

