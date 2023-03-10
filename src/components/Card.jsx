const Card = (props) => {
  return (
    <article className="card">
      <img alt={props.title} src={props.imgUrl} width="300" height="200" />
      <h3>{props.title}</h3>
      <span>${props.price}</span>
      <p>{props.description}</p>
      <p>Order a delivery</p>
    </article>
  )
}

export default Card