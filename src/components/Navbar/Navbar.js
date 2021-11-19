import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='Navbar'>
            <div className='Logo'> <img width={100} height={40} alt='Netflix logo' src='https://play-lh.googleusercontent.com/0rgPYj0GwZ6txpYZrzoMdhwzqg7vY6C9B-Ol7jlaz-Ox2rgpD4Tr82ZgDqkirrEohbGm=w412-h220-rw ' /> </div>
            <ul className='NavList'>
                <li> <Link to='/'>Home</Link></li>
                <li><Link to='/tv-shows'>Tv Shows</Link></li>
                <li><Link to='/movies'>Movies</Link></li>
            </ul>
        </nav>
    )
}
