import logo from '../assets/logo.svg'
import { Link } from "react-router-dom"
import "../css/header.css"

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <Link to="/">
        <img src={logo} alt='Logo Kasa' className='kasa-logo'></img>
        </Link>
    
</div>
<div className='navbar'>
<Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
</div>
</div>

)
}

export default Header