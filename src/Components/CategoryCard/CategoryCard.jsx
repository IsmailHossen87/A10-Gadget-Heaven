import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Cards from '../Cards/Cards';

const CategoryCard = () => {
    const data = useLoaderData()
    const {category} = useParams()

const [disPlayCard,setDisplayCard] = useState([])
useEffect(()=>{
    if(!category){
        setDisplayCard(data.slice(0,6))
    }else if(category === 'all'){
        setDisplayCard(data)
    }else{
        setDisplayCard(data.filter(item => item.category_name == category))
    }
},[category,data])

    return (
       <>
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-4'>
                {
                    disPlayCard.map(data => <Cards data={data}></Cards>)
                }
            </div>
        </div>
      
       </>
    );
};

export default CategoryCard;