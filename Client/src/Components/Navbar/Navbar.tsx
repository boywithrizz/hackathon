import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (<>
        <nav>
            <div className="flex justify-between items-center p-5 h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
                
                {/* <div><img src="" alt="" /></div> */}     {/* Logo */}

                <div className="cursor-pointer text-2xl font-bold"><h1>Colleg Hub</h1></div>
                <div className="">
                    <ul className='flex justify-between items-center flex-row space-x-4 nav-links-list'>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/">Home</NavLink></li>
                    </ul>
                </div>

                <div className='nav-features'>
                    
                <div className='nav-features-dropdown absolute top-12 right-0'>
                    <ul className='flex flex-col space-y-2 bg-black p-4 text-white w-40 '>
                        <li><NavLink to="/">Home</NavLink></li>
                        <hr />
                        <li><NavLink to="/register">Register</NavLink></li>
                        <hr />
                        <li><NavLink to="/">Home</NavLink></li>
                        <hr />
                        <li><NavLink to="/">Home</NavLink></li>
                        <hr />
                        <li><NavLink to="/">Home</NavLink></li>
                    </ul>
                </div>

                    <div className="nav-features-dropdown-icons">
                        <i className="fa-solid fa-bars"></i>
                        <i className="fa-solid fa-xmark hide-element"></i>
                        </div>
                
                </div>   {/* To add extra features to navbar */}

            </div>
        </nav>
    </>
    )
}

export default Navbar
