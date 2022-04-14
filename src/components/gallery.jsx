import {useState} from 'react'
import arrowright from '../assets/arrowright.svg'
import arrowleft from '../assets/arrowleft.svg'
import "../css/gallery.css"

function Gallery({pictures}) {
    const [current, setCurrent] = useState(0)
    const length = pictures.length

    function nextPicture() {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    function prevPicture() {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

let indexPicture = current +1;
if (pictures.length > 1) {
    
    return (
        
        <section className="gallery-container">
            <img src={arrowleft} alt='accomodation'className="arrow-left" onClick={prevPicture} />
            <img src={arrowright} alt='accomodation' className="arrow-right" onClick={nextPicture} />
                {pictures.map((picture, index) => {
                    return (    
                        <div key={index} className={index === current ? 'picture show' : 'picture' } >
                            {index === current && (<img src={picture} alt="gallery" className="gallery-img"/>)} 
                            <div className='index'>{indexPicture}/{pictures.length}</div>
                        </div>
                    )

                })}
        </section>
      
    ) } else {
        return (
            <section className="gallery-container">
                {pictures.map((picture, index) => {
                    return (    
                        <div key={index} className={index === current ? 'picture show' : 'picture' } >
                            {index === current && (<img src={picture} alt="gallery" className="gallery-img"/>)}  
                            <div className='index'>{indexPicture}/{pictures.length}</div>
                        </div>
                    )
                })}
            </section>
        )

    }
}   

export default Gallery