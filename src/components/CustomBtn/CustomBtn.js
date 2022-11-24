import React from 'react';

const CustomBtn = ({children}) => {
    return (
        <div>
             <button className="btn btn-primary bg-primary text-white border-none">{children}</button>
        </div>
    );
};

export default CustomBtn;