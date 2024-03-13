import React from 'react'
import { IoMdAdd } from "react-icons/io";
import ReactTable from './reactTable';
import { Link } from 'react-router-dom';
function AdminProducts() {
 const data=[
  {
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRui25CqmpJCp_4h-DdtuY6GeiMUNoVLtxY9cxS1oTg2xoL9KKoUbniUWUrC4HzffjwQY9vMDg_5N9jP5kk8GmBABsYqQZ5LQ&usqp=CAE",
    name: "xyz",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam rerum assumenda, fugit in numquam id cumque, blanditiis asperiores nisi incidunt dicta aperiam corporis! Optio debitis sint sequi, sit tempora culpa!",
    price: '$20.20',
    quantity: 50,
    date:new Date()
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRui25CqmpJCp_4h-DdtuY6GeiMUNoVLtxY9cxS1oTg2xoL9KKoUbniUWUrC4HzffjwQY9vMDg_5N9jP5kk8GmBABsYqQZ5LQ&usqp=CAE",
    name: "xyz",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam rerum assumenda, fugit in numquam id cumque, blanditiis asperiores nisi incidunt dicta aperiam corporis! Optio debitis sint sequi, sit tempora culpa!",
    price: '$20.20',
    quantity: 50,
    date:new Date()
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRui25CqmpJCp_4h-DdtuY6GeiMUNoVLtxY9cxS1oTg2xoL9KKoUbniUWUrC4HzffjwQY9vMDg_5N9jP5kk8GmBABsYqQZ5LQ&usqp=CAE",
    name: "xyz",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam rerum assumenda, fugit in numquam id cumque, blanditiis asperiores nisi incidunt dicta aperiam corporis! Optio debitis sint sequi, sit tempora culpa!",
    price: '$20.20',
    quantity: 50,
    date:new Date()
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRui25CqmpJCp_4h-DdtuY6GeiMUNoVLtxY9cxS1oTg2xoL9KKoUbniUWUrC4HzffjwQY9vMDg_5N9jP5kk8GmBABsYqQZ5LQ&usqp=CAE",
    name: "xyz",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam rerum assumenda, fugit in numquam id cumque, blanditiis asperiores nisi incidunt dicta aperiam corporis! Optio debitis sint sequi, sit tempora culpa!",
    price: '$20.20',
    quantity: 50,
    date:new Date()
  },

  {
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRui25CqmpJCp_4h-DdtuY6GeiMUNoVLtxY9cxS1oTg2xoL9KKoUbniUWUrC4HzffjwQY9vMDg_5N9jP5kk8GmBABsYqQZ5LQ&usqp=CAE",
    name: "xyz",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam rerum assumenda, fugit in numquam id cumque, blanditiis asperiores nisi incidunt dicta aperiam corporis! Optio debitis sint sequi, sit tempora culpa!",
    price: '$20.20',
    quantity: 50,
    date:new Date()
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRui25CqmpJCp_4h-DdtuY6GeiMUNoVLtxY9cxS1oTg2xoL9KKoUbniUWUrC4HzffjwQY9vMDg_5N9jP5kk8GmBABsYqQZ5LQ&usqp=CAE",
    name: "xyz",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam rerum assumenda, fugit in numquam id cumque, blanditiis asperiores nisi incidunt dicta aperiam corporis! Optio debitis sint sequi, sit tempora culpa!",
    price: '$20.20',
    quantity: 50,
    date:new Date()
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRui25CqmpJCp_4h-DdtuY6GeiMUNoVLtxY9cxS1oTg2xoL9KKoUbniUWUrC4HzffjwQY9vMDg_5N9jP5kk8GmBABsYqQZ5LQ&usqp=CAE",
    name: "xyz",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam rerum assumenda, fugit in numquam id cumque, blanditiis asperiores nisi incidunt dicta aperiam corporis! Optio debitis sint sequi, sit tempora culpa!",
    price: '$20.20',
    quantity: 50,
    date:new Date()
  }, {
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRui25CqmpJCp_4h-DdtuY6GeiMUNoVLtxY9cxS1oTg2xoL9KKoUbniUWUrC4HzffjwQY9vMDg_5N9jP5kk8GmBABsYqQZ5LQ&usqp=CAE",
    name: "xyz",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam rerum assumenda, fugit in numquam id cumque, blanditiis asperiores nisi incidunt dicta aperiam corporis! Optio debitis sint sequi, sit tempora culpa!",
    price: '$20.20',
    quantity: 50,
    date:new Date()
  }, {
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRui25CqmpJCp_4h-DdtuY6GeiMUNoVLtxY9cxS1oTg2xoL9KKoUbniUWUrC4HzffjwQY9vMDg_5N9jP5kk8GmBABsYqQZ5LQ&usqp=CAE",
    name: "xyz",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam rerum assumenda, fugit in numquam id cumque, blanditiis asperiores nisi incidunt dicta aperiam corporis! Optio debitis sint sequi, sit tempora culpa!",
    price: '$20.20',
    quantity: 50,
    date:new Date()
  }, {
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRui25CqmpJCp_4h-DdtuY6GeiMUNoVLtxY9cxS1oTg2xoL9KKoUbniUWUrC4HzffjwQY9vMDg_5N9jP5kk8GmBABsYqQZ5LQ&usqp=CAE",
    name: "xyz",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam rerum assumenda, fugit in numquam id cumque, blanditiis asperiores nisi incidunt dicta aperiam corporis! Optio debitis sint sequi, sit tempora culpa!",
    price: '$20.20',
    quantity: 50,
    date:new Date()
  }, {
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRui25CqmpJCp_4h-DdtuY6GeiMUNoVLtxY9cxS1oTg2xoL9KKoUbniUWUrC4HzffjwQY9vMDg_5N9jP5kk8GmBABsYqQZ5LQ&usqp=CAE",
    name: "xyz",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam rerum assumenda, fugit in numquam id cumque, blanditiis asperiores nisi incidunt dicta aperiam corporis! Optio debitis sint sequi, sit tempora culpa!",
    price: '$20.20',
    quantity: 50,
    date:new Date()
  },

 ]
 
  const columns = ["Image", "Name", "Description", "Price", "Quantity", "Action","addeddate"];
  return (
    <div className="container-28">
    <div className="container-28-1">
    <h3>Products</h3>
    <div><Link to="/newProduct"><IoMdAdd/></Link></div>
    </div>
<div className="container-28-2">
    <ReactTable data={data} columns={columns}/>
</div>
    </div>
  )
}

export default AdminProducts
