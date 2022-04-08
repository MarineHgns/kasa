import "../css/profileHost.css"

function Host(props) {
    return (
      <div className="host" aria-label="informations sur l'hôte">
        <h3>
        <span>{props.name}</span>
        </h3>
        <img src={props.picture} alt={`photos de ${props.name}`} className="host-pic" />
      </div>
    )
  }

  export default Host