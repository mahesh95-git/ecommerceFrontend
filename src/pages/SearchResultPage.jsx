
import { useSearchParams } from 'react-router-dom'
import { Footer, Header } from '../components'
import ProductsListBaseOnQuery from '../components/ProductsListBaseOnQuery'
function SearchResultPage() {
  const [searchParams]=useSearchParams()
  const userQuery=searchParams.get("q")

  return (
    <>
    <Header userQuery={userQuery}/>
  <ProductsListBaseOnQuery keyword={userQuery} ></ProductsListBaseOnQuery>
    <Footer/>
    </>
  )
}

export default SearchResultPage
