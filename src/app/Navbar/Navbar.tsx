import { Link } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
    return (
        <nav className='navbar'>
        <ul>
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/episodes">Episodes</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
        </ul>
      </nav>
    );
};