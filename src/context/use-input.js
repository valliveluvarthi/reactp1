import { useReducer,useContext } from 'react';
import FormContext from './form-context';
const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: '' };
  }
  return inputStateReducer;
};

const useInput = (validateValue) => {

  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  
  const formCtx = useContext(FormContext);
  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  

  const valueChangeHandler = (event) => {
    console.log(event.target.id);
    if(event.target.id === 'url'){
      formCtx.url = event.target.value;
      console.log("formCtx updated",formCtx.url)
    }
    if(event.target.id === 'title'){
      formCtx.title = event.target.value;
      console.log("formCtx updated",formCtx.title);
    }
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;