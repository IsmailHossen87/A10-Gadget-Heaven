import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Cards from '../Cards/Cards';

const CategoryCard = () => {
    const showOtherSite = useNavigate()
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
            <h2 className='text-xl font-semibold my-2'>Card Component : {category}</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    coffees.map(data => <Cards data={data}></Cards>)
                }
            </div>
        </div>
        <button onClick={()=> showOtherSite('/coffe')} className='btn btn-warning my-4'>Show All</button>
       </>
    );
};

export default CategoryCard;