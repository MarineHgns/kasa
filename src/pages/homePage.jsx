import Banner from "../components/banner"
import "../css/homePage.css"
import { Link } from "react-router-dom"
import Thumbnail from "../components/Thumbnail"
import logements from "../data/data.json"

function Home() {
    return (
      <div className="home-container">
        
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
    )
    
  }
  
  export default Home