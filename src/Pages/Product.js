import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import Rating from 'react-rating';
export default function Product() {
    let { id } = useParams();
    const [product,setproduct]=useState()
    const [loading,setisloading]=useState(true)

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(function (response) {setproduct(response.data) ; setisloading(false)})
      .catch(function (error) {console.log(error);})
      },[id])

      if(loading){
        return <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div class="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
    </div>
      }

  return (
    <div className='px-3 my-7 flex flex-col'>
        <div className=''>
            <h2 className='text-xl font-black	 text-cyan-800 mb-2'>{product.title}</h2>
            <p className='my-3 text-xs text-gray-500 lg:text-xl'>{product.description}</p>
            <div className='flex text-xl'>
                <p className='text-cyan-600'>{product.price} $</p>
                <Rating className='text-cyan-700 ml-10' initialRating={product.rating.rate} 
                fullSymbol={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>}
              emptySymbol={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>}/>
            <button className='ml-10 border border-indigo-600 rounded-xl text-indigo-600 text-xs p-1'>{product.category.toUpperCase()}</button>
            </div>
        </div>
        <div>
            <img className='mt-5' width={700} src={product.image} alt='product'/>
        </div>
    </div>
  )
}
