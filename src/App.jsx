import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/card'
import './App.css'

function App() {
  const [seats, setSeats] = useState([])
  const client = axios.create({
    baseURL: 'https://api.uka.se',
  })

  useEffect(() => {
    const fetchPost = async () => {
      let response = await client.get('/seats')
      setSeats(response.data)
    }
    fetchPost()
  }, [])

  // console.log(seats.seats)

  return (
    <div>
      <h2 className='header'>Lärosäten</h2>
      <div className='container'>
        {seats.seats &&
          seats.seats.map((seat) => {
            return <Card name={seat.name} type={seat.type} />
          })}
      </div>
    </div>
  )
}

export default App
