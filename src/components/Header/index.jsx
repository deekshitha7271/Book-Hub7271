import './index.css'
import { Link , useNavigate} from 'react-router'
import Cookies from 'js-cookie'
import { useState } from 'react'
const Header = () => {
  const navigate = useNavigate();
  const onClickLogOut = () => {
    Cookies.remove('jwt_token')
    navigate("/login", {replace:true})
    
  }
  const [activeLink, setActiveLink] = useState('home')
  const onItem = () => {
    setActiveLink('home')
  }
  const onItem2 = () => {
    setActiveLink('Bookshelves')
  }
  
    return(
    <nav className='header-div'>
      <Link to="/">
    <div className="heading-cont">
        <img src="https://res.cloudinary.com/dqxhjnhrt/image/upload/v1752118688/Group_7730_gl7f6c.png"className="logo-img"/>
        <h1 className="main-h">ook Hub</h1>
    </div>
    </Link>
    <div className='hamburger-menu'>
      
    </div>
    <div className='link-cont'>
      <Link to="/" onClick={onItem} className={activeLink === 'home' ? 'Active' : 'notIsActive'}>Home</Link>
      <Link to="/bookshelves" onClick={onItem2} className={activeLink === 'bookshelves' ? 'Active' : 'notIsActive'}>Bookshelves</Link>
      <div className='b-cont'>
      <button className='logout' onClick={onClickLogOut}>Logout</button>
      </div>
    </div>
    
    </nav>
    )
}
export default Header