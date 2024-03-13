import { CategoryName, Footer, Header, ProductAdd, ProductListing } from '../commponets'
import { useEffect, useState } from 'react'
import Loader from '../commponets/Loader'
import { data } from '../assets/products'

function Home() {
  const [loader,setLoader]=useState(true)
  useEffect(()=>{
    const timeOut= setTimeout(() => setLoader(false), 1000);
    return () => clearTimeout(timeOut);
  },[])
  
  return loader?<Loader/>:(
    <div className='home'>
      <Header/>
      <ProductAdd/>
      <CategoryName/>
      <ProductListing data={data} />
      <Footer/>
    </div>
  )
}

export default Home
