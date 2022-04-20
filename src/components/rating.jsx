import starFilled from '../assets/star-red.png'
import starEmpty from '../assets/greystar.svg'
import "../css/rating.css"

function Rating(props) {	
    const range = [1, 2, 3, 4, 5]
    const ratingValue = props.ratingValue
    return (
        <div className="rating">
            
            {range.map((rangeElem) =>
                ratingValue >= rangeElem ? <span key={rangeElem.toString()}><img src={starFilled} alt="star" className="star"/>
                </span> : <span key={rangeElem.toString()}><img src={starEmpty} alt="star-empty" className="star-empty"/>
                </span>
            )}
        </div>
    )
  }

  export default Rating
