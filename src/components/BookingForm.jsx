import { useState } from "react";

const BookingForm = () => {
  const [form, setForm] = useState({
    data: {
      resDate: undefined,
      resTime: undefined,
      guests: undefined,
      occasion: undefined,
    },
  });
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  const handleChange = (event) => {
    setForm((prevState) => ({
      data: {
        ...prevState.data,
        [event.target.name]: event.target.value,
      },
    }));
  };
  return (
    <form className="booking">
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
        {availableTimes.map((time) => (
          <option>{time}</option>
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
