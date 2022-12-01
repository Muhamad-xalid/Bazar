import React from 'react'
import { Link } from 'react-router-dom'
import { delimiter } from '../utils/Delimiter'
export default function ProductCard({product}) {
  return (
    <Link to={`/Products/${product.id}`} className='p-4 bg-white shadow-2xl rounded-lg'>
        <img src={product.image} alt='product' className=' h-60 w-full object-contain'/>
        <h2 className='text-lg font-black mt-6 mb-3'>{delimiter(product.title,30)}</h2>
        <p className='text-sm text-gray-500'>{delimiter(product.description,65)}</p>
        <div className='flex justify-between mt-8'>
            <p className='text-xl text-green-700'>{product.price} $</p>
            <button className='border border-indigo-600 rounded-xl text-indigo-600 text-xs p-1'>{product.category.toUpperCase()}</button>
        </div>
    </Link>
  )
}
