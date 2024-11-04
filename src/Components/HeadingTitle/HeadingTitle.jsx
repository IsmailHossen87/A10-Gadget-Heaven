import React from 'react';
import { NavLink } from 'react-router-dom';

const HeadingTitle = ({title, subtitle}) => {
    return (
        <div className='text-center w-2/3 mx-auto space-y-4 '>
            <h2 className='text-4xl font-semibold'>{title}</h2>
            <h2 className='w-2/3 mx-auto'>{subtitle}</h2>
            <NavLink to={'/dashboard'}><button className='border  rounded-full px-4 text-purple-600 border-purple-700 font-semibold py-1'>Shop Now</button></NavLink>
            
        </div>
    );
};

export default HeadingTitle;