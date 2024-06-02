import  { useState } from "react";
import { Admin_infoListing, Loader1, Pagination } from "../components";
import { useGetAllUsersQuery } from "../redux/api/admin";
function Admin_allUserPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetAllUsersQuery({ page: page, limit: 10 });
  console.log(data);
  const columns = ["Id", "Avatar", "Name", "Email", "PhoneNo", "Action"];
  const field = ["_id", "avatar", "name", "email", "phoneNo"];
  return isLoading ? (
    <Loader1 count={4} />
  ) : (
    <>
      <Admin_infoListing
        data={data && data.data}
        columns={columns}
        title={"customers"}
        field={field}
        manage={"admin/manageuser"}
      />
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={data && data.totalPages}
      />
    </>
  );
}

export default Admin_allUserPage;
