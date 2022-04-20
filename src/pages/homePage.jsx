import Banner from "../components/banner"
import "../css/homePage.css"
import { Link } from "react-router-dom"
import Thumbnail from "../components/Thumbnail"
import logements from "../data/data.json"
import { useEffect, useState} from 'react'
import Loader from "../components/loader"
import "../css/loader.css"

export default function Home() {
const [error, setError] = useState(null)
const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const fetchJSON = () => {
     fetch('src/data/data.json')
      .then(res=>res.text())
      .then(
        (result) => {
            setIsLoaded(true)
        },
        (error) => {
            setIsLoaded(true)
            setError(error)
        }
    )
    };

    fetchJSON();
  }, []);

    return error ? <p>Erreur : {error.message}</p>
    : !isLoaded ? <Loader />
    : <div className="home-container">
      
        <Banner/>
          <div className="accomodation-container">        
            {logements.logements.map((house)=> ( 
              <Link key={house.id} to={`logements/${house.id}`} >
              <Thumbnail image={house.cover} title={house.title}/>
              </Link>
              )) 
            }
          </div>
     </div>
}
  
  
  
  
