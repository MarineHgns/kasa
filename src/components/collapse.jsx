import arrowdown from '../assets/arrowdown.svg'
import arrowup from '../assets/arrowup.svg'
import { useState } from 'react'



function Collapse({title, content}) {
    const [isClosed, setIsClosed] = useState(true)
    
    return isClosed ? (
        <div className="dropdown">
            <div className="dropdown-title">
                <h3>{title}</h3>
                <img src={arrowdown} alt="arrow-down" onClick={() => setIsClosed(false)}/>
            </div>
        </div>

    ) : (
        <div className="dropdown">
            <div className="dropdown-title">
                <h3>{title}</h3>
                <img src={arrowup} alt="arrow-up" onClick={() => setIsClosed(true)}/>
            </div>
                <div className="dropdown-content">
                    <p>{content}</p>
                </div>
            
        </div>
    )

}

export default Collapse