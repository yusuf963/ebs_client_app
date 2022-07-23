import {Outlet,Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assests/crown_logo.svg'
import './Navigation.scss'

const Navigation = ()=>{
    return(
        <>
          <div className='navigation'>
            <Link className='logo-container' to='/' rel="noreferrer">
              <Logo className='nav-link'/>
            </Link>
            <div className='nav-links-container'>
              <Link className='nav-link' to='/shop' rel="noreferrer">Shop</Link>
              <Link className='nav-link' to='/sign-in'>Sign-in</Link>
            </div>
          </div>
            <Outlet/>
        </>
    )
}

export default Navigation