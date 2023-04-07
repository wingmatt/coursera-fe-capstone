import { useState } from "react";


const BookingForm = ({availableTimes, dispatch, onSubmit}) => {
  const [form, setForm] = useState({
    data: {
      resDate: undefined,
      resTime: undefined,
      guests: undefined,
      occasion: undefined,
    },
  });
  const handleChange = (event) => {
    setForm((prevState) => ({
      data: {
        ...prevState.data,
        [event.target.name]: event.target.value,
      },
    }));
    if (event.target.name === "res-date") updateAvailableTimes(event.target.value);
  };
  const updateAvailableTimes = (newDate) => {
    dispatch({type: "UPDATE_TIMES", payload: newDate})
  }
  return (
    <form className="booking" onSubmit={(event) => onSubmit(event, form.data)} aria-label="Make a reservation">
      <h2>Reserve a Table</h2>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={form.data.resDate}
        onChange={(event) => handleChange(event)}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={form.data.resTime}
        onChange={(event) => handleChange(event)}
      >
        {availableTimes?.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={form.data.guests}
        onChange={(event) => handleChange(event)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={form.data.occasion}
        onChange={(event) => handleChange(event)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation"></input>
    </form>
  );
};

export default BookingForm;

//export {handleSubmit};