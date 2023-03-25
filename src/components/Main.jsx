import Card from "./Card";
import Testimonial from "./Testimonial";

const Main = () => {
  return (
    <main>
      <section className="hero bg-primary">
        <div className="grid-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Blah blah blah</p>
          <a href="/reserve-table" className="button cta">Reserve a Table</a>
          <img  className="imagery" alt="Little Lemon Chicago" src="" />
        </div>
      </section>
      <section className="highlights">
        <div className="grid-content">
          <h2>Specials</h2>
          <a href="/order-online" className="button">
            Order Online
          </a>
          <ul>
            <li>
              <Card title="Greek Salad" description="Description" price="X.YY" imgUrl="http://via.placeholder.com/300x200" />
            </li>
            <li>
              <Card title="Greek Salad" description="Description" price="X.YY" imgUrl="http://via.placeholder.com/300x200" />
            </li>
            <li>
              <Card title="Greek Salad" description="Description" price="X.YY" imgUrl="http://via.placeholder.com/300x200" />
            </li>
          </ul>
        </div>
      </section>
      <section className="testimonials">
        <ul>
          <li><Testimonial name="Ralph" imgUrl="http://via.placeholder.com/75x75" rating="5/5" review="Great place, great food... great FUN!"/></li>
          <li><Testimonial name="Ralph" imgUrl="http://via.placeholder.com/75x75" rating="5/5" review="Great place, great food... great FUN!"/></li>
          <li><Testimonial name="Ralph" imgUrl="http://via.placeholder.com/75x75" rating="5/5" review="Great place, great food... great FUN!"/></li>
        </ul>
      </section>
      <section className="hero">
        <div className="grid-content">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Blah blah blah</p>
          <aside className="imagery">
            <img alt="Little Lemon Chicago" src="" />
            <img alt="Little Lemon Chicago" src="" />
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Main;
