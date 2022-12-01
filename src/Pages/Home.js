import React , {useState, useEffect} from 'react'
import axios from 'axios' 
import ResponsiveCarousel from '../Components/ResponsiveCarousel' 
export default function Home() {
    const [categories,setcategories] = useState([])
  useEffect(()=>{
    axios.get(' https://fakestoreapi.com/products/categories')
    .then(function (response) { setcategories(response.data);
    })
    .catch(function (error) {console.log(error);})
  },[])

  return (
    <div className='p-5 flex justify-around' >
      <div>
      <h1 className='text-3xl   text-cyan-700'>Our Products</h1>
       {categories.map((categorie)=>{
        return (
            <div className='m-5 text-xl justify-center'>
                <div className='bg-cyan-800 p-3 rounded-lg text-white text-center'>{categorie}</div>
            </div>
        )
       })}
    </div>
    <div className='w-3/5'>
        <ResponsiveCarousel  /> 
      </div>
    </div>
  )
}
