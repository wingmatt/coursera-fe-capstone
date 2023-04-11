import { useState } from "react";
import { useNavigate } from "react-router-dom";


const BookingForm = ({availableTimes, dispatch, onSubmit}) => {
  const [form, setForm] = useState({
    data: {
      resDate: "",
      resTime: "",
      guests: "",
      occasion: "",
      submittable: false,
      errors: {}
    }
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    console.log(document.getElementById("booking-form").checkValidity());
    setForm({...form.data, submittable: document.getElementById("booking-form").checkValidity(), errors: {
      ...form.errors,
      [event.target.id]: !event.target.checkValidity()
    }});
    if (event.target.id === "resDate") updateAvailableTimes(event.target.valueAsDate);
    setForm((prevState) => (
      {
      data: {
        ...prevState,
        [event.target.id]: event.target.value,
      },
    }));
  };
  const updateAvailableTimes = (newDate) => dispatch({type: "UPDATE_TIMES", payload: newDate})
  return (
    <form className="booking" onSubmit={(event) => onSubmit(event, form.data, navigate)} aria-label="Make a reservation" id="booking-form">
      <h2>Reserve a Table</h2>
      <div className="input-container">
        <label htmlFor="resDate">What day?</label>
        <input
          type="date"
          id="resDate"
          required
          value={form.data.resDate}
          onChange={(event) => handleChange(event)}
          className={form.data.errors.resDate && "invalid"}
        />
        {form.data.errors.resDate && <span className="error">Please enter your desired reservation date.</span>}
      </div><div className="input-container">
      <aside><h3>Available Times:</h3>
      <ul className="available-times">
        {Array.isArray(availableTimes) ? availableTimes.map((time) => (
            <li key={time}>{time}</li>
          )) : ""}
      </ul>
      </aside>
      <label htmlFor="resTime">What time?</label>
      <select
        id="resTime"
        value={form.data.resTime}
        required
        onChange={(event) => handleChange(event)}
        className={form.data.errors.resTime && "invalid"}
      >
        <option disabled hidden value=""></option>
        {Array.isArray(availableTimes) ? availableTimes.map((time) => (
          <option key={time}>{time}</option>
        )) : ""}
      </select>
      {form.data.errors.resTime && <span className="error">Please enter your desired reservation time.</span>}
      </div><div className="input-container">
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
        className={form.data.errors.guests && "invalid"}
      />
      {form.data.errors.guests && <span className="error">Please enter the number of guests.</span>}
      </div><div className="input-container">
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={form.data.occasion}
        onChange={(event) => handleChange(event)}
      >
        <option disabled hidden value=""></option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      </div>
      <input type="submit" value="Make Your reservation" className="button" disabled={!form.data.submittable}></input>
    </form>
  );
};

export default BookingForm;

//export {handleSubmit};