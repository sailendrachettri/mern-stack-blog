import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <nav className="border-b-4 border-green-700 text-center fixed w-full top-0 bg-green-600 font-bold text-lg text-white">
                <ul>
                    <li className="inline-block pt-4 pb-4">
                        <NavLink to="/" className="pl-6 pr-8">Home</NavLink>
                    </li>
                    <li className="inline-block pt-4 pb-4">
                        <NavLink to="/about" className="pl-6 pr-8">About</NavLink>
                    </li>
                    <li className="inline-block pt-4 pb-4">
                        <NavLink to="/articles-list" className="pl-6 pr-8">Articles</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;