import { CategoryName, Footer, Header, ProductAdd, ProductListing } from '../commponets'
import { useState } from 'react'
import Loader from '../commponets/Loader'

function Home() {
  const [loader,setLoader]=useState(false)
  return loader?<Loader/>:(
    <div>
      <Header/>
      <ProductAdd/>
      <CategoryName/>
      <ProductListing/>
      <Footer/>
    </div>
  )
}

export default Home
