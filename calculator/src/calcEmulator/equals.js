import { eval as _eval, parse as _parse } from 'expression-eval';

export default function equals(currentInputs, display){
  let newInputs = [...currentInputs];
  let newDisplay = display;

  switch(currentInputs.length){
    case 0:
      newInputs[0] = display;
      newInputs[1] = '=';
      break;
    case 1:
      newInputs[1] = '=';
      break;
    case 2:
      newInputs[2] = display;
      newInputs[3] = '=';
      newDisplay = _eval(_parse(`${newInputs[0]} ${newInputs[1]} ${newInputs[2]}`), {});
      break;
    case 3:
      newInputs[3] = '=';
      newDisplay = _eval(_parse(`${newInputs[0]} ${newInputs[1]} ${newInputs[2]}`), {});
      break;
    case 4:
      newInputs[0] = newInputs[2];
      newInputs[2] = display;
      newDisplay = _eval(_parse(`${newInputs[0]} ${newInputs[1]} ${newInputs[2]}`), {});
      break;
    default:
      console.log('Error: Equals-Def Should not trigger');
  }

  return [newInputs, newDisplay];
}

