import logements from '../data/data.json';
import { useParams, Navigate } from 'react-router-dom';
import Collapse from "../components/collapse"
import Host from '../components/profileHost';
import Rating from '../components/rating'
import Tags from '../components/tag';
import "../css/accomodationPage.css"
import Gallery from '../components/gallery';


function Accomodation() { 
    const { id } = useParams()
    const accomodationById = logements.logements.filter((house) => house.id === id)
    
    if(accomodationById == null || accomodationById.length === 0) {
        return <Navigate to='/*' />
    }
    
    return (
        <div className="wrapper"> 
            {logements.logements.filter(house => house.id === id).map((accomodationById, index) => (
                
                <div key={index} className="accomodation-page">
                    <Gallery pictures={accomodationById.pictures}/>
                    <div className="info">

                        <div className="info-top">

                            <div className="info-accomodation">
                                <h1>{accomodationById.title}</h1>
                                <p>{accomodationById.location}</p>
                            </div>
                            <Tags listTags={accomodationById.tags}/>
                        </div>
                        <div className='profile'>
                            <Host picture={accomodationById.host.picture} name={accomodationById.host.name} />
                            <Rating ratingValue={accomodationById.rating}/>
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