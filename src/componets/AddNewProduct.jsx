import React from "react";
import InputField from "./InputField";
import { MdOutlineCancel } from "react-icons/md";

function AddNew() {
  return (
    <div className="container-30">
        <h2>Product</h2>
      <form>
      
        <InputField
          type="text"
          placeholder="product title"
          lable="Title"
          required={true}
        ></InputField>

        <InputField
          type="Number"
          placeholder="product price"
          lable="Price"
          required={true}
        ></InputField>
        <InputField
          type="Number"
          placeholder="product quantity"
          lable="Quantity"
          required={true}
        ></InputField>
        <InputField
          type="input"
          placeholder="product category"
          lable="Category"
          required={true}
        ></InputField>
          <InputField
          type="number"
          placeholder="product discount"
          lable="discount"
          required={true}
        ></InputField>
        <InputField
          type="file"
          placeholder="product image"
          lable="Image"
          required={true}
        ></InputField>

        <div className="product-size">
          <p>Size</p>
          <div className="product-size-opt">
          <div>M:<input type="checkbox" value="M" /></div>
          <div>S:<input type="checkbox" value="S" /></div>
          <div>XL:<input type="checkbox" value="XL" /></div>
          <div>XXL:<input type="checkbox" value="XXL" /></div>
          <div>
          L:<input type="checkbox" value="L" />
          </div>
          </div>
          
        </div>
        <label htmlFor="description">
          <div className="product-description">Description</div>
          <div className="pd">
            <textarea
              required
              cols="30"
              rows="10"
              placeholder="Product description"
            ></textarea>
          </div>
        </label>
        <div className="product-button">
          <button className="submit-newProduct">Submit</button>
          <input className="cancel-newProduct" type="reset"></input>
        </div>
      </form>
    </div>
  );
}

export default AddNew;
