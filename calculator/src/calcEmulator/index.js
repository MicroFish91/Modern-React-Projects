import equals from './equals';
import operations from './operations';
import percent from './percent';
import plusOrMinus from './plusOrMinus';

export default function calcEmulator(currentInputs, display, newInput){
  let updatedCalcInputs = [...currentInputs];
  let newDisplay = display;
  
  switch(newInput){
    case 'AC':
      updatedCalcInputs = [];
      newDisplay = "";
      break;
    case '+/-':
      [updatedCalcInputs, newDisplay] = plusOrMinus(currentInputs, display);
      break;
    case '%':
      [updatedCalcInputs, newDisplay] = percent(currentInputs, display);
      break;
    case '/':
      [updatedCalcInputs, newDisplay] = operations(currentInputs, display, '/');
      break;
    case '*':
      [updatedCalcInputs, newDisplay] = operations(currentInputs, display, '*');
      break;
    case '-':
      [updatedCalcInputs, newDisplay] = operations(currentInputs, display, '-');
      break;
    case '+':
      [updatedCalcInputs, newDisplay] = operations(currentInputs, display, '+');
      break;
    case '=':
      [updatedCalcInputs, newDisplay] = equals(currentInputs, display);
      break;
    default:
      if (newDisplay == 0){
        newDisplay = newInput;
      } else {
        newDisplay += newInput;
      }
  }

  return [updatedCalcInputs, newDisplay];
}