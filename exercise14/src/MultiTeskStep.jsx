const initialState = {
  step: 1,
  fristName: "",
  lastName: "",
  email: "",
  phone: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "updateField":
      return { ...state, [action.field]: action.value };

    case "nextStep":
      return {
        ...state,
        step: state.step + 1,
      };
    case "prevStep":
      return {
        ...state,
        step: state.step - 1,
      };
    case "resetForm":
      return initialState;

    default:
      return state;
  }
};

import React, { useReducer } from "react";

const MultiTeskStep = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeButton = (e) => {
    dispatch({
      type: "updateField",
      field: e.target.value,
      value: e.target.value,
    });
  };
  const nextStep = () => {
    dispatch({ type: "nextStep" });
  };
  const prevStep = () => {
    dispatch({ type: "prevStep" });
  };
  const resetForm = () => {
    dispatch({ type: "resetForm" });
  };

  const SubmitBtn = () => {
    alert("successfully registered");
    resetForm();
  };

  return (
    <div>
      <h2>MultiTeskStep Registration</h2>
      {state.step === 1 && (
        <div>
          <h3>Step1: Profile</h3>
          <label>
            fristName:
            <input
              type="text"
              name="fristName"
              value={state.fristName}
              onChange={changeButton}
            />
          </label>
          <br />
          <label>
            lastName:
            <input
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={changeButton}
            />
          </label>
          <br />
          <button onClick={nextStep}>nextStep</button>
        </div>
      )}
      ;
      {state.step === 3 && (
        <div>
          <h3>Step2: Contact</h3>
          <label>
            email:
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={changeButton}
            />
          </label>
          <br />
          <label>
            phone:
            <input
              type="number"
              name="phone"
              value={state.phone}
              onChange={changeButton}
            />
          </label>
          <br />
          <button onClick={netxStep}>Nexts</button>
          <button onClick={prevStep}>prevStep</button>
        </div>
      )}
      {state.step === 3 && (
        <div>
          <h3>Step3: Review</h3>
          <p>
            <strong>First Name:</strong> {state.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {state.lastName}
          </p>
          <p>
            <strong>Email:</strong> {state.email}
          </p>
          <p>
            <strong>Phone:</strong> {state.phone}
          </p>
          <button onClick={prevStep}>Back</button>
          <button onClick={SubmitBtn}>Confirm</button>
        </div>
      )}
      {state.step > 3 && (
        <div>
          <h3>Form Completed</h3>
          <button onClick={resetForm}>Start Over</button>
        </div>
      )}
    </div>
  );
};

export default MultiTeskStep;
