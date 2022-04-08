import logements from '../data/data.json';
import { useParams, Navigate } from 'react-router-dom';
import Collapse from "../components/collapse"
import Host from '../components/profileHost';
import Rating from '../components/rating'
import Tags from '../components/tag';
import "../css/accomodationPage.css"


function Accomodation(props) { 
    const { id } = useParams()
    const accomodationById = logements.logements.filter((house) => house.id === id)

    if(accomodationById == null) {
        return <Navigate to='/*' />
    }
    
    return (
        <div className="wrapper"> 
            {logements.logements.filter(house => house.id === id).map((accomodationById, index) => (
                
                <div key={index} className="accomodation-page">
                    <div className="info">

                        <div className="info-top">

                            <div className="info-accomodation">
                                <h1>{accomodationById.title}</h1>
                                <p>{accomodationById.location}</p>
                            </div>
                        
                        <Host picture={accomodationById.host.picture} name={accomodationById.host.name} />
                        </div>

                        <div className='info-bottom'>
                            <Rating ratingValue={accomodationById.rating}/>
                            <Tags listTags={accomodationById.tags}/>
                        </div>
                    </div>
                    
                    <section className="dropdowns">
                    <Collapse
                        title="Description"
                        content={accomodationById.description}
                    />
                    <Collapse
                        title="Équipements"
                        content={accomodationById.equipments}
                    />
                    </section>
                </div>    
            ))}
        </div> 

    )}

export default Accomodation