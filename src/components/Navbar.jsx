import {Link} from 'react-router-dom';

import './Navbar.css'
export default function Navbar() {
    
    return(
        <nav className='navbar'  >
            <div className="logo">
                <h1>HIRO</h1>
            </div>


            <div className="navbarcomp">
 <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/dashboard">dashboard</Link>
        <Link to="/contact">contact</Link>
            </div>

       
        </nav>
    )
}