import react from "react";
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {
   
    return(
        <nav className="nav">
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link className="Link" to='/'> 
                <li>Home</li>
                </Link>
                <Link className="Link" to='/About'> 
                <li>About</li>
                </Link>
                <Link className="Link" to='/Shop'>
                <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
