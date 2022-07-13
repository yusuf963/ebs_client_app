import {Outlet} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assests/crown_logo.svg'
// import { Link } from 'react-router-dom'
import './Navigation.scss'

const Navigation = ()=>{
    return(
        <>
          <div className='navigation'>
            <a className='logo-container' to='/' rel="noreferrer">
              <Logo className='nav-link'/>
            </a>
            <div className='nav-links-container'>
              <a className='nav-link' to='/shop' rel="noreferrer">Shop</a>
              <a className='nav-link' to='/sign-in'>Sign-in</a>
            </div>
          </div>
            <Outlet/>
        </>
    )
}

export default Navigation