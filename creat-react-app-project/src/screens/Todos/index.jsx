import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import Nav from '../../components/Nav';

const nestedRoutes = [
    { name: "All", path: "/todos/all" },
    { name: "Search", path: "/todos/search" },
    { name: "Add", path: "/todos/add" },
    { name: "Update", path: "/todos/update" },
];

const Todos = () => {
    return (
        <>
            {/* <nav>
                <ul className='flex gap-6 items-center'>
                    {nestedRoutes.map((link, index) =>
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
            <Nav routes={nestedRoutes} />
            <section className='my-4'>
                <Outlet />
            </section>
        </>

    )
}

export default Todos