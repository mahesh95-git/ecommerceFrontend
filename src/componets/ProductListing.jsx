import {useState} from 'react'
import Product from './Product'
import Loader from './Loader'
import Loader1 from './loader1'

function ProductListing({data}) {
 
  const [loader,setLoader]=useState(false)
  return loader?<div className='product-listing-loader'><Loader1 cout={6}/>
  <Loader1 cout={6}/></div>:(
    <div className='container-4'>
  <div className="container-4-1">
    <h2>New Product</h2>
  </div>
  <div className="container-4-2">
  {data&& data.map((value,index)=>(
    <Product info={value} key={index}/>
  ))}

  </div>
    </div>
  )
}

export default ProductListing
