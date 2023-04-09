import { useState } from "react";
import { useNavigate } from "react-router-dom";


const BookingForm = ({availableTimes, dispatch, onSubmit}) => {
  const [form, setForm] = useState({
    data: {
      resDate: undefined,
      resTime: undefined,
      guests: undefined,
      occasion: undefined,
    },
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    if (event.target.id === "res-date") updateAvailableTimes(event.target.valueAsDate);
    setForm((prevState) => ({
      data: {
        ...prevState.data,
        [event.target.name]: event.target.value,
      },
    }));
  };
  const updateAvailableTimes = (newDate) => dispatch({type: "UPDATE_TIMES", payload: newDate})
  return (
    <form className="booking" onSubmit={(event) => onSubmit(event, form.data, navigate)} aria-label="Make a reservation">
      <h2>Reserve a Table</h2>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        required
        value={form.data.resDate}
        onChange={(event) => handleChange(event)}
      />
      <label htmlFor="res-time">Choose time</label>
      <h3>Available Times:</h3>
      <ul className="available-times">
        {Array.isArray(availableTimes) ? availableTimes.map((time) => (
            <li key={time}>{time}</li>
          )) : "nah"}
      </ul>
      <select
        id="res-time"
        value={form.data.resTime}
        required
        onChange={(event) => handleChange(event)}
      >
        {Array.isArray(availableTimes) ? availableTimes.map((time) => (
          <option key={time}>{time}</option>
        )) : "nah"}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        required
        id="guests"
        value={form.data.guests}
        onChange={(event) => handleChange(event)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={form.data.occasion}
        onChange={(event) => handleChange(event)}
        name="occasion"
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