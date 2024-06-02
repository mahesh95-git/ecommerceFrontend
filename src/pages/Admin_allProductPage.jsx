import { useState } from "react";
import { Admin_infoListing, Loader1, Pagination } from "../components";
import { useGetAllProductsQuery } from "../redux/api/product";
function Admin_allProductPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetAllProductsQuery({ page: page, limit: 11 });
  const columns = ["Id", "Image", "Name", "Price", "Stock", "Action"];
  const field = ["_id", "images", "name", "price", "stock"];
  return isLoading ? (
    <Loader1 />
  ) : (
    <>
      <Admin_infoListing
        data={data && data.products}
        columns={columns}
        title={"products"}
        field={field}
        manage={"admin/manageproduct"}
      />
      <Pagination setPage={setPage} page={page} totalPages={data.totalPages} />
    </>
  );
}

export default Admin_allProductPage;
