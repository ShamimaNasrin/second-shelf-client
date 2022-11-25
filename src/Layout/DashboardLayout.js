import React, { useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useSellers from '../Hooks/useSellers';
import useTitle from '../Hooks/useTitle';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSellers(user?.email);

    //scrolltop
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useTitle('Dashboard');

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-secondary">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        {/* buyer options */}
                        {
                            !isSeller && !isAdmin && <>
                                <li><Link to="/dashboard/myorders" className='border border-primary rounded-md mb-2'>My Orders</Link></li>
                            </>
                        }

                        {/* seller options */}
                        {
                            isSeller && <>
                                <li><Link to="/dashboard/addproduct" className='border border-primary rounded-md mb-2'>Add A product</Link></li>
                                <li><Link to="/dashboard/myproducts" className='border border-primary rounded-md mb-2'>My Products</Link></li>
                                <li><Link to="/dashboard/mybuyers" className='border border-primary rounded-md mb-2'>My buyers</Link></li>
                            </>
                        }

                        {/* admin options */}
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allsellers" className='border border-primary rounded-md mb-2'>All Sellers</Link></li>
                                <li><Link to="/dashboard/allbuyers" className='border border-primary rounded-md mb-2'>All Buyers</Link></li>
                                <li><Link to="/dashboard/reporteditems" className='border border-primary rounded-md mb-2'>Reported Items</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;