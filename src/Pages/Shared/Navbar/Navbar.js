import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import logo from '../../../images/brand-logo.png';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    //Logout
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    //header menus
    const menuItems = <>
        <li className='font-bold text-white'><Link to='/'>Home</Link></li>
        <li className='font-bold text-white'><Link to='/blog'>Blog</Link></li>
        <li className='font-bold text-white'><Link to='/about'>About</Link></li>
        {
            user?.uid ?
                <>
                    <li className='font-bold text-white'><Link to='/dashboard'>Dashboard</Link></li>
                    <li className='font-bold text-white'>
                        <button onClick={handleLogOut} className='btn bg-transparent border-white border-2 px-4 text-white hover:bg-info hover:border-info rounded-md'>Sign Out</button>
                    </li>
                </>
                :
                <li className='font-bold'>
                    <Link to='/login'>
                        <button className="btn bg-transparent border-white border-2 px-4 text-white hover:bg-info hover:border-info">Login</button>
                    </Link>
                </li>
        }
    </>

    return (
        <div className="navbar bg-primary px-5 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn bg-transparent border-0 lg:hidden btn-toogle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-primary">
                        {menuItems}
                    </ul>
                </div>

                <Link to="/" className="normal-case">
                    <div className='flex items-center justify-center flex-col'>
                        <img className='w-14' src={logo} alt="" />
                        <h2 className='font-extrabold text-white mx-1 text-lg'>SECOND<span className='text-info'>SHELF</span></h2>
                    </div>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;