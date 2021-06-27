import operations from './operations';

export default function calcEmulator(currentInputs, display, newInput){
  let updatedCalcInputs = [...currentInputs];
  let newDisplay = display;
  
  switch(newInput){
    case 'AC':
      updatedCalcInputs = [];
      newDisplay = "";
      break;
    case '+/-':
      // Call External Function
      break;
    case '%':
      // Call External Function
      break;
    case '/':
      [updatedCalcInputs, newDisplay] = operations(currentInputs, display, newInput, '/');
      break;
    case 'X':
      [updatedCalcInputs, newDisplay] = operations(currentInputs, display, newInput, 'X');
      break;
    case '-':
      [updatedCalcInputs, newDisplay] = operations(currentInputs, display, newInput, '-');
      break;
    case '+':
      [updatedCalcInputs, newDisplay] = operations(currentInputs, display, newInput, '+');
      break;
    case '=':
      // Call External Function
      break;
    default:
      updatedCalcInputs[updatedCalcInputs.length - 1] = updatedCalcInputs[updatedCalcInputs.length - 1] + newInput;
      newDisplay += newInput;
  }

  return [updatedCalcInputs, newDisplay];
}