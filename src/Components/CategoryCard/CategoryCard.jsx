import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Cards from '../Cards/Cards';

const CategoryCard = () => {
    const datas = useLoaderData()
    const {category} = useParams()
    // console.log("datas",datas ,"category",category)

    const [allCards,setAllcard]= useState([])
    useEffect(()=>{
       if(category){
        const storecard= [...datas].filter(data => data.category_name === category)
        setAllcard(storecard)
       }else{
        setAllcard(datas.slice(0,6))
       }
    },[datas,category])
    return (
       <>
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-4'>
                {
                    allCards.map(data => <Cards data={data}></Cards>)
                }
            </div>
        </div>
      
       </>
    );
};

export default CategoryCard;