import React from 'react';
import dashboard from '../../images/dashboard-bro.png';

const DashboardDefault = () => {
    return (
        <div>
            <h1 className='text-5xl font-extrabold text-center my-10'>Please select a menu</h1>
            <div>
                <img className="w-2/5 m-auto" src={dashboard} alt="dashboard" />
            </div>
        </div>
    );
};

export default DashboardDefault;