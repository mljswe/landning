import './card.css'
const Card = ({ grupp, id, namn }) => {
  return (
    <div className='card'>
      <h1 className='card-header' key={id}>{grupp}</h1>
      <ul className='card-content'>{namn}</ul >
    </div>
  )
}
export default Card
