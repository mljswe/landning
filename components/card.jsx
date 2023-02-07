import './card.css'
const Card = ({ name, type }) => {
  return (
    <div className='card'>
      <h1 className='card-header'>{name}</h1>
      <p>{type}</p>
    </div>
  )
}
export default Card
