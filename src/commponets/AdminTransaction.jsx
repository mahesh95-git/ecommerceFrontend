import React from 'react'
import { IoMdAdd } from "react-icons/io";
import ReactTable from './reactTable';
function AdminTransaction() {
  const data=[{
    Avatar: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRui25CqmpJCp_4h-DdtuY6GeiMUNoVLtxY9cxS1oTg2xoL9KKoUbniUWUrC4HzffjwQY9vMDg_5N9jP5kk8GmBABsYqQZ5LQ&usqp=CAE",
    name: "xyz",
    amount: 50000,
    quantity: 50,
    status: "Pending",
    date:new Date()
  },
  {
    Avatar: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRui25CqmpJCp_4h-DdtuY6GeiMUNoVLtxY9cxS1oTg2xoL9KKoUbniUWUrC4HzffjwQY9vMDg_5N9jP5kk8GmBABsYqQZ5LQ&usqp=CAE",
    name: "xyz",
    amount: 50000,
    quantity: 50,
    status: "Pending",
    date:new Date()
  },
  
]
   
    const columns = ["Avatar", "Name", "Amount",  "Quantity", "Status","Action","orderDate"];
  return (
    <div className="container-28">
    <div className="container-28-1">
    <h3>Transaction</h3>
    <div><IoMdAdd/></div>
    </div>
<div className="container-28-2">
<ReactTable data={data} columns={columns}/>
</div>
    </div>
  )
}

export default AdminTransaction
