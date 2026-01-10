
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.avif'
function Nav(){
    return(
        <>
        <nav>
           <div>
                <img src={Logo}/>
            </div> 

            <div className='links' >
                <Link to ='/'  className='nav-link'>Home</Link>
                <Link to ='/Projects' className='nav-link'>Projects</Link>
                <Link to ='/contacts' className='nav-link'>Contact me</Link>
            </div>
        

        </nav>
        </>
    )
}

export default Nav;