
import { FaBars, FaFacebook, FaTimes } from 'react-icons/fa'
import { useRef, useState } from 'react'
import "../Styles/main.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navRef = useRef();
    /*    const isMenuOpen = useState(true); */

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");

    }
    const closeNavbar = () => {
        navRef.current.classList.remove("responsive_nav");

    }

    return (
        <header>
            <h3 className='logo'><a href='/'>Restaurang Tai Lee</a></h3>
            <nav ref={navRef}>
                <h3 className='logo nav-btn'>Restaurang Tai Lee</h3>

                <Link to="/" onClick={closeNavbar}>Hem</Link>
                <Link to="/lunch" onClick={closeNavbar}>Lunchbuffé</Link>
                <Link to="/helg" onClick={closeNavbar}>Helgbuffé</Link>
                <Link to="/contact" onClick={closeNavbar}>Kontakt</Link>
                <Link to="/take-away" onClick={closeNavbar}>Take away</Link>
                <div className='navbar-item'>
                    <a href="https://www.facebook.com/profile.php?id=100089347540081"><FaFacebook /></a>
                </div>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>

                <FaBars />
            </button>
        </header>
    )
}

export default Navbar
