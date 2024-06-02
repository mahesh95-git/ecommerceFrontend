import {
  CategoryName,
  Footer,
  Header,
  ProductAdd,
  ProductListing,
  Loader1,
} from "../components";

import { useGetLatestProductsQuery } from "../redux/api/product";

function HomePage() {
  const { data, isLoading } = useGetLatestProductsQuery();
  return (
    <div className="home">
      <Header />
      <ProductAdd />
      <CategoryName />
      {isLoading ? (
        <Loader1 count={12} />
      ) : (
        <ProductListing
          data={data && data.products}
          title={"LATEST PRODUCTS"}
        />
      )}
      <Footer />
    </div>
  );
}

export default HomePage;
