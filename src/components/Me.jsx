import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  useLogoutMutation,
  useUpdateUserDetailsMutation,
} from "../redux/api/auth";
import { setLogin, setUser } from "../redux/controller/user";
import toast from "react-hot-toast";
import InputField from "./InputField";
import Loader from "./Loader";

function Me() {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [avatar, setAvatar] = useState("./user-128-48.png");

  const [
    logout,
    {
      isLoading: isLoggingOutLoading,
      isSuccess: isLogoutSuccess,
      isError: isLogoutError,
      data: logoutData,
      error: logoutError,
    },
  ] = useLogoutMutation();
  const [
    updateUser,
    {
      data: newInfo,
      isError: isUpdateUserError,
      error: updateUserError,
      isLoading: isUpdateUserLoading,
    },
  ] = useUpdateUserDetailsMutation();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setPhoneNo(user.phoneNo || "");
      setAvatar(user.avatar && user.avatar.url);
    }
  }, [user]);

  useEffect(() => {
    if (newInfo && newInfo.success) {
      
      dispatch(setUser(newInfo.User));
      toast.success(newInfo.message);
      setEdit(false); // Disable edit mode after successful update
    }

    if (isLogoutSuccess) {
      toast.success(logoutData.message);
      dispatch(setUser(null));
      dispatch(setLogin(false));
      navigate("/");
    }

    if (isLogoutError) {
      toast.error(logoutError.data.message);
    }

    if (isUpdateUserError) {
      toast.error(updateUserError.data.message);
    }
  }, [
    newInfo,
    isLogoutSuccess,
    isLogoutError,
    logoutData,
    logoutError,
    isUpdateUserError,
    updateUserError,
    dispatch,
    navigate,
  ]);

  const handleEdit = () => {
    setEdit(!edit);
    if (edit) {
      setName(user.name || "");
      setEmail(user.email || "");
      setPhoneNo(user.phoneNo || "");
      setAvatar(user.avatar && user.avatar.url);
    }
  };

  const handleLogout = async () => {
    await logout();
  };
  

  const handleUserDetail = async () => {
    const formData = new FormData();
  
    // Append name to formData if it has changed
    if (user && user.name !== name) {
      formData.append("name", name);
    }
  
    // Append other fields
    if (user && user.phoneNo !== phoneNo) {
      formData.append("phoneNo", phoneNo);
    }
    if (user && user.email !== email) {
      formData.append("email", email);
    }
  
    // Only append avatar if it has changed
   
      formData.append("avatar", avatar);
    
  
    await updateUser(formData);
  };

  return isUpdateUserLoading || isLoggingOutLoading ? (
    <Loader />
  ) : (
    <div className="container-16">
      <div className="container-16-1">
        {edit ? (
          <input
            type="file"
            id="avatar"
            className="custom-file-input"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        ) : (
          <img src={avatar} alt="User" />
        )}
        <div>
          <input
            type="text"
            value={name}
            readOnly={!edit}
            name="name"
            onChange={(e) => setName(e.target.value)}
            className={edit ? "toggle-class" : ""}
          />
          <span className="edit" onClick={handleEdit}>
            {edit ? "Cancel" : "Edit"}
          </span>
          {edit && (
            <span className="submit" onClick={handleUserDetail}>
              Submit
            </span>
          )}
        </div>
      </div>
      <div className="container-16-2">
        <div>
          <div className="Info-section">
            <InputField
              label="Email"
              value={email}
              setValue={setEmail}
              readOnly={!edit}
              classes={edit ? "field" : "field1"}
            />
          </div>
          <div className="Info-section">
            <InputField
              label="Phone Number"
              value={phoneNo}
              setValue={setPhoneNo}
              readOnly={!edit}
              classes={edit ? "field" : "field1"}
            />
          </div>
        </div>
        <div className="tab">
          <Link to="/orders">
            <span>My Orders</span>
          </Link>
          <Link to="/admin/dashboard">
            <span>Admin Dashboard</span>
          </Link>
          <Link to="/changepassword">
            <span>Change Password</span>
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Me;
