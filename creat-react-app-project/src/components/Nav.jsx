import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = ({ routes }) => {
    return (
        <nav>
            <ul className='flex gap-6 items-center'>
                {(routes || []).map((link, index) =>
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
        </nav>
    )
}

export default Nav