import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (<>
        <nav>
            <div className="flex justify-between items-center p-5 h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">

                {/* <div><img src="" alt="" /></div> */}     {/* Logo */}

                <div className="cursor-pointer text-2xl font-bold"><h1>College Hub</h1></div>

                <ul className="flex justify-between items-center flex-row space-x-10 nav-links-list">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className="nav-link text-gray-800 hover:text-blue-500 transition-colors duration-300"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className="nav-link text-gray-800 hover:text-blue-500  transition-colors duration-300"
                        >
                            Academics
                        </NavLink>
                    </li>
                    <li className="nav-item relative">
                        <NavLink
                            to="/alumni"
                            className="nav-link  px-4 py-2 hover:text-blue-500 transition-colors duration-300"
                        >
                            Alumni
                        </NavLink>
                        <ul className="dropdown absolute top-full left-0 bg-gray-200 min-w-[200px] list-none p-2 m-0 shadow-md opacity-0 invisible transition-opacity duration-300 hei">
                            <li>
                                <NavLink
                                    to="/almaconnect"
                                    className="text-gray-800 block px-4 py-2 hover:bg-gray-300 hover:text-black transition-colors duration-300"
                                >
                                    AlmaConnect
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contribute"
                                    className="text-gray-800 block px-4 py-2 hover:bg-gray-300 hover:text-black transition-colors duration-300"
                                >
                                    Contribute to CollegeHub
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/degrees-certificates"
                                    className="text-gray-800 block px-4 py-2 hover:bg-gray-300 hover:text-black transition-colors duration-300"
                                >
                                    Degrees & Certificates
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className="nav-link text-gray-800 hover:text-blue-500  transition-colors duration-300"
                        >
                            For Students
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className="nav-link text-gray-800 hover:text-blue-500  transition-colors duration-300"
                        >
                            Resources
                        </NavLink>
                    </li>
                </ul>

                <div className='nav-features'>

                    <div className='nav-features-dropdown absolute top-12 right-0'>
                        <ul className='flex flex-col space-y-2 bg-black p-4 text-white w-40 '>
                            <li><NavLink to="/">Home</NavLink></li>
                            <hr />
                            <li><NavLink to="/register">Register</NavLink></li>
                            <hr />
                            <li><NavLink to="/">Chat</NavLink></li>
                            <hr />
                            <li><NavLink to="/">Content</NavLink></li>
                            <hr />
                            <li><NavLink to="/">About</NavLink></li>
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
