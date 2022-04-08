import arrowdown from '../assets/arrowdown.svg'
import arrowup from '../assets/arrowup.svg'
import { useState } from 'react'
import "../css/collapse.css"



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
                {Array.isArray(content)? 
                    (<ul>
                        {content.map((equipment, index) => (
                            <li key={`${equipment}-${index}`}>{equipment}</li>)
                        )}
                    </ul>) 
                    : 
                    (<p>{content}</p>)
                }
            </div>
            
        </div>
    )

}

export default Collapse