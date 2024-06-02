import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import {
  useDeleteUserMutation,
  useGetUserQuery,
  useUpdateRoleMutation,
} from "../redux/api/admin";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "./Loader";

function ManageUser() {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = location.pathname.split("/")[3];
  const { data, isLoading, isError, error } = useGetUserQuery(userId);
  const [
    updateRole,
    {
      isLoading: isUpdateRoleLoading,
      isError: isUpdateRoleError,
      error: updateRoleError,
      data: updateRoleRes,
    },
  ] = useUpdateRoleMutation();
  const [
    deleteUser,
    {
      isLoading: isDeleteUserLoading,
      isError: isDeleteUserError,
      error: DeleteUserError,
      data: deleteUserRes,
    },
  ] = useDeleteUserMutation();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNo: "",
    avatar: "",
  });
  const [role, setRole] = useState("");

  const handleDeleteUser = async () => {
    await deleteUser(userId);
  };

  const handleUpdateRole = async () => {
    await updateRole({ userId, role });
  };

  useEffect(() => {
    if (data) {
      setUser({
        email: data.data.email,
        name: data.data.name,
        phoneNo: data.data?.phoneNo,
        avatar: data.data?.avatar?.url,
      });
      setRole(data.data.role);
    }
    if (isError) {
      toast.error(error.data.message);
    }
  }, [data, isError, error]);

  useEffect(() => {
    if (deleteUserRes && deleteUserRes.success) {
      toast.success(deleteUserRes.message);
      navigate("/admin/customers");
    }
    if (isDeleteUserError) {
      toast.error(DeleteUserError.data.message);
    }
    if (updateRoleRes && updateRoleRes.success) {
      toast.success(updateRoleRes.message);
    }
    if (isUpdateRoleError) {
      toast.error(updateRoleError.data.message);
    }
  }, [
    deleteUserRes,
    updateRoleRes,
    isDeleteUserError,
    isUpdateRoleError,
    updateRoleError,
    DeleteUserError,
    navigate
  ]);

  return isLoading?<Loader/>:(
    <div className="container-40">
      <form action="">
        <img src={user.avatar||"/public/user-128-48.png"} alt="" />

        <InputField
          label={"Name"}
          type={"text"}
          value={user.name}
          readOnly={true}
        />
        <InputField
          label={"Email"}
          type={"email"}
          value={user.email}
          readOnly={true}
        />
        <InputField
          label={"Phone No."}
          type={"number"}
          value={user.phoneNo}
          readOnly={true}
        />

        <div className="role-container">
          <p>Role</p>
          <label htmlFor="user">User</label>
          <input
            type="radio"
            id="role user"
            value={"user"}
            checked={role === "user"}
            onChange={() => setRole("user")}
          />
          <label htmlFor="admin">Admin</label>
          <input
            type="radio"
            id="role admin"
            value={"admin"}
            checked={role === "admin"}
            onChange={() => setRole("admin")}
          />
        </div>
        <div>
          <button className="bg-blue" type="button" onClick={handleUpdateRole}>
       
            {isUpdateRoleLoading ? "Updating..." : "CHANGE ROLE"}
          </button>
          <button className="bg-red" type="button" onClick={handleDeleteUser}>
           
            {isDeleteUserLoading ? "Deleting..." : "DELETE ACCOUNT"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ManageUser;
