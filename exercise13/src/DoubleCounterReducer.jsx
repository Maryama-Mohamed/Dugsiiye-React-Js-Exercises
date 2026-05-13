import React, { useReducer } from 'react'

 const initialState = { 
    counterA: 0,
    counterB: 0,
}

  const reducer = (state, action) =>{

    switch (action.type) {
    case 'IncrementA':
      return { ...state, counterA: state.counterA + 1 };
    case 'DecrementA':
      return {
        ...state,
        counterA: state.counterA > 0 ? state.counterA - 1 : 0,
      };
    case 'IncrementB':
      return { ...state, counterB: state.counterB + 1 };
    case 'DecrementB':
      return {
        ...state,
        counterB: state.counterB > 0 ? state.counterB - 1 : 0,
      };
    case 'ResetAll':
      return initialState;
    default:
      return state;
  }
  }

const DoubleCounterReducer = () => {
 const [state, dispatch] = useReducer(reducer, initialState);
 console.log(state)
 console.log(dispatch)
 
  return (
    <div>
      <h1>Double Counter</h1>
      <h2>countA: {state.counterA}</h2>
      <button onClick={() => dispatch({type: 'DecrementA'})} disabled={state.counterA === 0}>DecrementA -A</button>
     
      <button onClick={() => dispatch({type: 'IncrementA'})} >IncrementA +A</button>

      <div>
      <h2>counterB: {state.counterB}</h2>
      <button onClick={() => dispatch({type: 'IncrementB'})}>IncrementB +B</button>
      
      <button onClick={() => dispatch({type: 'DecrementB'})} disabled={state.counterB === 0}>DecrementB -B</button>
      <button onClick={() => dispatch({type: 'ResetAll'})}>Reset</button>
      </div>
    </div>

  )
}

export default DoubleCounterReducer
