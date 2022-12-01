import React , {useState,useEffect} from 'react'
import ProductList from './ProductList'
import axios from 'axios'
export default function Products() {
    const [products,seproducts] = useState([])
    const [loading,setisloading]=useState(true)
    useEffect(()=>{
        axios.get(' https://fakestoreapi.com/products')
        .then(function (response) { seproducts(response.data) ; setisloading(false)
        })
        .catch(function (error) {console.log(error);})
      },[])
      
      if(loading){
        return <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div class="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
    </div>
      }
  return (
    <div>
            <ProductList products={products}/>     
    </div>
  )
}
