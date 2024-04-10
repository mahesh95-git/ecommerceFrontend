import React from 'react'
import { IoMdAdd } from "react-icons/io";
import ReactTable from './reactTable';
function AdminCustomers() {
  const data = [
    {
      avatar: "/kid.png",
      name: "mahesh",
      email: "mahesh956154@gmail.com",
      phone: 9370079379,
      role: "user",
      date:new Date()
    },

      
  ];
  const columns = ["Avatar", "Name", "Email", "Phone", "Role", "Action","sign-UpData"];
  return (
    <div className="container-28">
    <div className="container-28-1">
    <h3>Customers</h3>
    </div>
<div className="container-28-2">
<ReactTable data={data}columns={columns} manage={"userprofile"}/>
</div>
    </div>
  )
}

export default AdminCustomers
