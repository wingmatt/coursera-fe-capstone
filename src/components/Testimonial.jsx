const Testimonial = (props) => {
  return (
    <article className="testimonial">
      <span className="rating">{props.rating}</span>
      <img alt={props.name} src={props.imgUrl} />
      <span className="name">{props.name}</span>
      <p className="quotation">{props.quotation}</p>
    </article>
  )
}

export default Testimonial