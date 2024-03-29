const Card = (props) => {
  return (
    <article className="card">
      <img alt={props.title} src={props.imgUrl} width="270" height="180" />
      <h3>{props.title}</h3>
      <span className="price">${props.price}</span>
      <p>{props.description}</p>
      <a href="/" className="button">Order a delivery</a>
    </article>
  )
}

export default Card