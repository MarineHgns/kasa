import logo from '../assets/logo-white.svg'
import "../css/footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='credits'>
            <div className='logo'>
                <img src={logo} alt='Logo Kasa' className='kasa-logo'></img>
            </div>
                    © 2020 Kasa. All rights reserved
        </div>
    </div>

)
}

export default Footer