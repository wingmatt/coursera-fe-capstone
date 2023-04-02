import Card from "../components/Card";
import Testimonial from "../components/Testimonial";

const ReserveTable = () => {
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
        <section className="highlights">
          <div className="grid-content">
            <h2>Reserve a Table</h2>
            <a href="/order-online" className="button cta">
              Order Online
            </a>
            <ul>
              <li>
                <Card title="Greek Salad" description="Description" price="X.YY" imgUrl="http://via.placeholder.com/350x200" />
              </li>
              <li>
                <Card title="Greek Salad" description="Description" price="X.YY" imgUrl="http://via.placeholder.com/350x200" />
              </li>
              <li>
                <Card title="Greek Salad" description="Description" price="X.YY" imgUrl="http://via.placeholder.com/350x200" />
              </li>
            </ul>
          </div>
        </section>
        <section className="testimonials">
          <ul>
            <li><Testimonial name="Ralph" imgUrl="http://via.placeholder.com/75x75" rating="5/5" quotation="Great place, great food... great FUN!"/></li>
            <li><Testimonial name="Ralph" imgUrl="http://via.placeholder.com/75x75" rating="5/5" quotation="Great place, great food... great FUN!"/></li>
            <li><Testimonial name="Ralph" imgUrl="http://via.placeholder.com/75x75" rating="5/5" quotation="Great place, great food... great FUN!"/></li>
          </ul>
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