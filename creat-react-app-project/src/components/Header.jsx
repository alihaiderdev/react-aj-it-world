import React from 'react'
import { Link, NavLink, } from 'react-router-dom'
import Nav from './Nav';

const headerLinks = [
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Services", path: "/services" },
    { name: "Posts", path: "/posts" },
    { name: "Todos", path: "/todos" },
    { name: "Login", path: "/login" },
];

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 bg-gray-200 fixed top-0 left-0 right-0 w-full'>
            <Link to={"/"}>React Router Dom</Link>
            {/* <nav>
                <ul className='flex gap-6 items-center'>
                    {headerLinks.map((link, index) =>
                        <li key={index}>
                            <NavLink style={(navLinkInfo) => {
                                const { isActive, isPending, isTransitioning } = navLinkInfo
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    backgroundColor: isActive ? "grey" : "",
                                    padding: isActive ? "0.25rem 0.5rem" : "",
                                    borderRadius: isActive ? "0.25rem" : "",
                                    color: isPending ? "red" : "black",
                                    viewTransitionName: isTransitioning ? "slide" : "",
                                };
                            }} to={link.path}>{link.name}</NavLink>
                        </li>)}
                </ul>
            </nav> */}
            <Nav routes={headerLinks} />
        </header>

    )
}

export default Header