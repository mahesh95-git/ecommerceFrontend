import React from "react";
import InputField from "./InputField";
import { MdOutlineCancel } from "react-icons/md";

function AddNew() {
  return (
    <div className="container-30">
      <form>
        <h2>Product</h2>
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
          type="file"
          placeholder="product image"
          lable="Image"
          required={true}
        ></InputField>
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
