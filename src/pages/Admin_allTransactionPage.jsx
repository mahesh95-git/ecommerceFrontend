import { useState } from "react";
import { Admin_infoListing, Loader1, Pagination } from "../components";
import { useGetAllTransactionsQuery } from "../redux/api/admin";
function Admin_allTransactionPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetAllTransactionsQuery(page, 10);
  const columns = ["Id", "Avatar", "Amount", "Items", "Status", "Action"];
  const field = ["_id", "avatar", "totalPrice", "totalItems", "orderStatus"];
  return isLoading ? (
    <Loader1 />
  ) : (
    <>
      <Admin_infoListing
        data={data?.data}
        columns={columns}
        field={field}
        title={"transactions"}
        manage={"admin/manageorder"}
      />
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={data?.totalPages || 1}
      />
    </>
  );
}
export default Admin_allTransactionPage;
