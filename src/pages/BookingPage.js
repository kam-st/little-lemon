import React, { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../api/api";
import { useNavigate } from "react-router-dom";

function BookingPage() {
  let initAvailTimes;

  function initializeTimes(date) {
    initAvailTimes = fetchAPI(new Date());
    return initAvailTimes;
  }

  function updateTimes(date) {
    let newDate = new Date(date);
    return fetchAPI(newDate);
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate("/confirmed");
    }
  }

  const reducer = (state, action) => {
    let newState;
    switch (action.type) {
      case "UPDATE_TIMES":
        newState = updateTimes(action.payload);
        break;

      default:
        throw new Error();
    }
    return newState;
  };

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());

  return (
    <div className="section-inner-col">
      <h1 className="desc-title">
        Please fill in following form to reserve a table at Little Lemon.
      </h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
}

export default BookingPage;
