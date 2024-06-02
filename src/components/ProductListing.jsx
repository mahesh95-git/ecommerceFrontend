import {useState} from 'react'
import Product from './Product'
import Loader1 from './Loader1'

function ProductListing({data,title}) {
 
  const [loader,setLoader]=useState(false)
  return loader?<div className='product-listing-loader'><Loader1 count={6}/>
  <Loader1 count={6}/></div>:(
    <div className='container-4'>
  <div className="container-4-1">
    <h2>{title?.toUpperCase()||"Search Result"}</h2>
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
