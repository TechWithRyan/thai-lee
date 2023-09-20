
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

    return (
        <header>
            <h3 className='logo'><a href='/'>Restaurang Thai Lee</a></h3>
            <nav ref={navRef}>
                <h3 className='logo nav-btn'>Restaurang Thai Lee</h3>

                <Link to="/">Hem</Link>
                <Link to="/lunch">Lunchbuffé</Link>
                <Link to="/helg">Helgbuffé</Link>
                <Link to="/contact">Kontakt</Link>
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
