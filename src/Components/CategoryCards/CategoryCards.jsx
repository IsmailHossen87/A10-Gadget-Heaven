import React from 'react';

const CategoryCards = () => {
    return (
        <div className='container mx-auto flex '>
            {/* left part */}
            <div className='border rounded-md w-[20%]'> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ut repudiandae hic. Debitis numquam explicabo error tempore fuga id.</p></div>
            {/* right part */}
            <div className='border rounded-md w-full grid md:grid-cols-3 gap-3'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque illo necessitatibus quod ut rem sapiente qui labore neque exercitationem at.</p></div>
        </div>
    );
};

export default CategoryCards;