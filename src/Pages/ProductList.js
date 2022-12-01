import React from 'react'
import ProductCard from './ProductCard'
export default function ProductList({products}) {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10'>
        {products.map((product)=>{
            return <ProductCard product={product}/>
        })}
    </div>
  )
}
