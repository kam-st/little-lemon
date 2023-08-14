import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const form = useForm({
    defaultValues: {
      resDate: new Date(),
      resTime: 9,
      guests: 1,
      occassion: "",
    },
  });
  const { register, control, handleSubmit, formState, watch } = form;

  const { errors } = formState;

  const onSubmit = (formData) => {
    submitForm(formData);
  };

  const resDateSub = watch("resDate");

  useEffect(() => {
    console.log(resDateSub);
    dispatch({ type: "UPDATE_TIMES", payload: resDateSub });
    return () => resDateSub.unsubscribe;
  }, [resDateSub, dispatch]);

  return (
    <main>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "grid", maxWidth: "500px", gap: "20px" }}
      >
        <h2 className="menu-title">Booking Form</h2>

        <label htmlFor="resDate">Choose date</label>
        <input
          type="date"
          id="resDate"
          {...register("resDate", {
            valueAsDate: true,
            required: "Date is Required",
          })}
        />
        <p>{errors.resDate?.message}</p>
        <label htmlFor="resTime">Choose time</label>
        <select
          id="resTime"
          {...register("resTime", { required: "Time is Required" })}
        >
          {availableTimes.map((aTime) => (
            <option key={aTime}>{`${aTime}:00`}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          {...register("guests", {
            valueAsNumber: true,
            required: "Number of guests needs to be selected",
          })}
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" {...register("occasion")}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit" className="submit">
          Make Your reservation
        </button>
      </form>
      <DevTool control={control} />
    </main>
  );
}

export default BookingForm;
