import { useState } from "react";
import InputField from "./InputField";
import { Link } from "react-router-dom";

function Me() {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("Mahesh Rathod");
  const [email, setEmail] = useState("mahesh956154@gmail.com");
  const [phone, setPhone] = useState(9370079379);

  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleChanges = (e) => {
    setName(e.target.value);
    console.log(e.target.value, e.target.name);
  };
  return (
    <div className="container-16">
      <div className="container-16-1">
        <img src="/user.png" alt="" />
        <div>
          <input
            type="text"
            value={name}
            readOnly={!edit ? true : false}
            name="name"
            onChange={handleChanges}
            className={edit ? "toggle-class" : ""}
          />
          {!edit ? (
            <span className="edit" onClick={handleEdit}>
              Edit
            </span>
          ) : (
            <span className="edit" onClick={handleEdit}>
              Cancel
            </span>
          )}
          {edit ? <span className="submit">Submit</span> : <div></div>}
        </div>
      </div>
      <div className="container-16-2">
        <div>
          <div className="Info-section">
            <InputField
              label={"Email"}
              value={email}
              setValue={setEmail}
              redOnly={edit ? false : true}
              classes={edit ? "field" : "field1"}
            />
          </div>
          <div className="Info-section">
            <InputField
              label={"Phone"}
              value={phone}
              setValue={setPhone}
              redOnly={edit ? false : true}
              classes={edit ? "field" : "field1"}
            />
          </div>
        </div>
        <div className="tab">
          <Link to={"/orders"}>
            <span>My Orders</span>
          </Link>
          <Link to={"/admin"}>
            <span>Admin Dashboard</span>
          </Link>
          <Link to={"/orders"}>
            <span>Change Password</span>
          </Link>
          <span>Logout</span>
          <span>Delete Account</span>
        </div>
      </div>
    </div>
  );
}

export default Me;
