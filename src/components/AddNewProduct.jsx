import { useEffect, useState, useRef } from "react";
import InputField from "./InputField";

import { useAddNewProductMutation } from "../redux/api/admin";
import toast from "react-hot-toast";

function AddNew() {
  const [selectedSize, setSelectedSize] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [images, setImages] = useState([]);
  const [stock, setStock] = useState("");
  const [addNewProduct, { isLoading, data, isError, error }] =
    useAddNewProductMutation();
  const formRef = useRef();
  const size = ["X", "Xl", "L", "XXS", "XXL"];
  const handleSize = (value, checked) => {
    if (checked) {
      setSelectedSize((pre) => [...pre, value]);
    } else {
      setSelectedSize(selectedSize.filter((item) => item !== value));
    }
  };
  console.log(selectedSize);
  useEffect(() => {
    if (data && data.success) {
      toast.success(data.message);
      resetForm();
    }
    if (isError) {
      toast.error(error.data.message);
    }
  }, [data, error, isError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price),
      formData.append("category", category),
      formData.append("subCategory", subCategory),
      formData.append("stock", stock),
      selectedSize.forEach((val) => {
        formData.append("sizes", val);
      });
    images.forEach((val) => {
      formData.append(`images`, val);
    });
    await addNewProduct(formData);
  };
  const handleImages = async (files) => {
    setImages(Array.from(files));
  };
  const resetForm = () => {
    setSelectedSize([]);
    setName("");
    setDescription("");
    setPrice("");
    setCategory("");
    setSubCategory("");
    setImages([]);
    setStock("");
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div className="container-30">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} ref={formRef}>
        <InputField
          type="text"
          placeholder="Enter product title"
          label="name"
          value={name}
          setValue={setName}
          required={false}
        ></InputField>
        <InputField
          type="Number"
          placeholder="Enter product price"
          label="Price"
          required={false}
          value={price}
          setValue={setPrice}
        ></InputField>

        <div>
          <div>Images</div>
          <input
            type="file"
            multiple
            onChange={(e) => handleImages(e.target.files)}
          />
        </div>
        <InputField
          type="Number"
          placeholder="Enter product stock"
          label="Stock"
          value={stock}
          setValue={setStock}
          required={false}
        ></InputField>
        <InputField
          type="input"
          placeholder="Enter product category"
          label="Category"
          value={category}
          setValue={setCategory}
          required={false}
        ></InputField>
        <InputField
          type="input"
          placeholder="Enter product subCategory"
          label="subCategory"
          value={subCategory}
          setValue={setSubCategory}
          required={false}
        ></InputField>
        <div className="Enter product-size">
          <div>Sizes</div>
          <div className="product-size-opt">
            {size.map((val) => (
              <>
                {val}:
                <input
                  type="checkbox"
                  value={val}
                  onChange={(e) => handleSize(e.target.value, e.target.checked)}
                  key={val}
                />
              </>
            ))}
          </div>
        </div>
        <label htmlFor="Enter description">
          <div className="product-description">Description</div>
          <div className="pd">
            <textarea
              cols="30"
              rows="10"
              placeholder="Product description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </label>
        <div className="product-button">
          <button
            className="submit-newProduct"
            disabled={isLoading ? true : false}
          >
            {isLoading ? "Adding..." : "SUBMIT"}
          </button>
          <button className="cancel-newProduct" type="reset">
            RESET
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNew;
