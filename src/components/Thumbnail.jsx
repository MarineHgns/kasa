import '../css/thumbnail.css'

function Thumbnail({image, title}) {
    return (
        <div className="thumb">
            <img src={image} alt="" className="thumb-image"></img>
            <h2 className="thumb-title">{title}</h2>
        </div>
    )
}

export default Thumbnail
