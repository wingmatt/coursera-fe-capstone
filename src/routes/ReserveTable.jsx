import BookingForm from "../components/BookingForm"

const handleSubmit = (event, data) => {
  event.preventDefault();
  console.log("Form submitted:", data);
}

const ReserveTable = ({availableTimes, dispatch}) => {
  return (
    <>
      <section className="hero bg-primary">
          <div className="grid-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Alias ea quisquam provident voluptates. Quam eligendi blanditiis itaque ullam aut corporis. Labore aut consequatur.</p>
            <a href="/reserve-table" className="button cta">Reserve a Table</a>
            <img  className="imagery" alt="Little Lemon Chicago" src="http://via.placeholder.com/300x200" />
          </div>
        </section>
        <section className="reserve-table">
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} onSubmit={handleSubmit} />
        </section>
        <section className="about">
          <div className="grid-content">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Alias ea quisquam provident voluptates. Quam eligendi blanditiis itaque ullam aut corporis. Labore aut consequatur. Alias ea quisquam provident voluptates. Quam eligendi blanditiis itaque ullam aut corporis. Labore aut consequatur.</p>
            <aside className="imagery">
              <img alt="Little Lemon Chicago" src="http://via.placeholder.com/200x300" />
              <img alt="Little Lemon Chicago" src="http://via.placeholder.com/200x300" />
            </aside>
          </div>
        </section>
      </>
  )
}

export default ReserveTable