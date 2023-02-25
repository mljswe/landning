import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/card'
import './App.css'

function App() {
  const [seats, setSeats] = useState([])
  const client = axios.create({
    baseURL: 'https://statistik-api.uka.se/',
  })

  useEffect(() => {
    const fetchPost = async () => {
      let response = await client.get('api/indicators')
      setSeats(response.data)
    }
    fetchPost()
  }, [])



  // skapar array med namn utifrån seats
  // const keyNames = Object.keys(seats)
  // console.log(seats);



  // console.log(Object.entries(seats));


  return (
    <div>
      <div className='container'>
        {seats &&
          Object.entries(seats).map((grupp) => {
            const gruppNamn = grupp[0];

            const hisLank = "https://www.uka.se/vara-resultat/statistik/hogskolan-i-siffror/statistik?statq="

            const indikatorNamn = Object.entries(grupp[1]).map((indi) => {
              return <li>
                <a href={hisLank + indi[1].most_recent_url}>
                  {indi[1].name}
                </a>
              </li>
            })

            return <Card grupp={gruppNamn} namn={indikatorNamn}  ></Card>

          })
        }
      </div>
    </div >

  )
  // return (
  //   <div>
  //     <div className='container'>
  //       {seats &&
  //         Object.keys(seats).map((grupp) => {
  //           const namnUt = "Här ska listan vara"
  //           // console.log(seats.Ekonomi);
  //           return <Card grupp={grupp} namn={namnUt}  ></Card>

  //         })
  //       }
  //     </div>
  //   </div >

  // )



}

export default App
