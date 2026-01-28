import logo from '../../assets/logo.png';
import styles from './Navigation.module.css';

const Navigation = () => {
    
    return (
    <nav className={`${styles.navigation} container`}>
        <div>
            <img src={logo} alt="logo" />
        </div>
        <ul className="nav_links">
            <li className="nav_link">
                Home
            </li>
            <li className="nav_link">
                About
            </li>
            <li className="nav_link">
                Contact
            </li>
        </ul>
    </nav>
    )
}

export default Navigation