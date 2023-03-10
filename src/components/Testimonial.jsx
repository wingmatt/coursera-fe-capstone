const Testimonial = (props) => {
  return (
    <article className="testimonial">
      <span>{props.rating}</span>
      <img alt={props.name} src={props.imgUrl} />
      <span className="name">{props.name}</span>
      <p>{props.review}</p>
    </article>
  )
}

export default Testimonial