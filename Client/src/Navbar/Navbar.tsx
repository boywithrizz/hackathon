import React from 'react'

const Navbar = () => {
    return (<>
        <nav>
            <div className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
                <div><img src="" alt="" /></div>
                <div>
                    <ul className='flex justify-between items-center flex-row space-x-4'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Admision</li>
                        <li>Comtact</li>
                    </ul>
                </div>
                <div></div>
            </div>
        </nav>
    </>
    )
}

export default Navbar
