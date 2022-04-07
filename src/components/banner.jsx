import banner from '../assets/bannerhome.png'
import "../css/banner.css"



function Banner() {
  const textBannerHome = "Chez vous, partout et ailleurs"
    return (
      <div className="banner"  style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${banner})`,
      }}>
        <h1 className="text-banner-home"> {textBannerHome} </h1>
      
    </div>
    )
    
  }
  
  export default Banner