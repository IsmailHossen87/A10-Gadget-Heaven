import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Cards from '../Cards/Cards';

const CategoryCard = () => {
    const datas = useLoaderData()
    const {category} = useParams()
    // const maindata = datas.filter(data => data.category === category)
    const [coffees,setCoffes]= useState([])
    useEffect(()=>{
       if(category){
        const storeCoffe = [...datas].filter(data => data.category === category)
        setCoffes(storeCoffe)
       }else{
        setCoffes(datas.slice(0,6))
       }
    },[datas,category])
    return (
       <>
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-4'>
                {
                    coffees.map(data => <Cards data={data}></Cards>)
                }
            </div>
        </div>
      
       </>
    );
};

export default CategoryCard;