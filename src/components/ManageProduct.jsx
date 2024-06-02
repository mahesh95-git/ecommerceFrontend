import React, { useEffect, useState } from "react";
import InputField from "../components/InputField";
import { product, useProductDetailQuery } from "../redux/api/product";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import {
  useDeleteProductMutation,
  useUpdateProductDetailsMutation,
} from "../redux/api/admin";
import toast from "react-hot-toast";
function ManageProduct() {
  const location = useLocation();
  const { data, isLoading } = useProductDetailQuery(
    location.pathname.split("/")[3]
  );
  const [
    updateProductDetails,
    {
      isLoading: isUpdateProductLoading,
      data: updateProductRes,
      isError,
      error,
    },
  ] = useUpdateProductDetailsMutation();
  const [
    deleteProduct,
    {
      isError: isDeleteProductError,
      isLoading: isDeleteProductLoading,
      data: deleteProductRes,
    },
  ] = useDeleteProductMutation();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [images, setImages] = useState([]);
  const [stock, setStock] = useState("");

  useEffect(() => {
    if (data && data.productdetails) {
      const { name, description, stock, price, category, subCategory, } =
        data.productdetails;
      setName(name);
      setDescription(description);
      setPrice(price);
      setCategory(category);
      setSubCategory(subCategory);
      setStock(stock);
      setSelectedSize([]);
    }
  }, [data]);

  useEffect(() => {
    if (updateProductRes && updateProductRes.success) {
      toast.success(updateProductRes.message);
      navigate("/admin/products");
    }
    if (isError) {
      toast.error(error.data.message);
    }

    if (deleteProductRes && deleteProductRes.success) {
      toast.success(deleteProductRes.message);
      navigate("/admin/products");
    }
    if (isDeleteProductError) {
      toast.error(error.data.message);
    }
  }, [
    updateProductRes,
    isError,
    error,
    navigate,
    deleteProductRes,
    isDeleteProductError,
  ]);

  const handleSize = (value, checked) => {
    if (checked) {
      setSelectedSize((pre) => [...pre, value]);
    } else {
      setSelectedSize(selectedSize.filter((item) => item !== value));
    }
  };

  const handleDeleteProduct = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(location.pathname.split("/")[3]);
    }
  };
  const handleImages = async (files) => {
    setImages(Array.from(files));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price),
      formData.append("category", category),
      formData.append("subCategory", subCategory),
      formData.append("stock", stock),
     selectedSize.forEach((val)=>{
      formData.append("sizes", val);
     })
    if (images?.length) {
      images.forEach((val) => {
        formData.append(`images`, val);
      });
    }
    await updateProductDetails({
      formData,
      productId: location.pathname.split("/")[3],
    });
  };

  const size = ["X", "Xl", "L", "XXS", "XXL"];
  return isLoading ? (
    <Loader />
  ) : (
    <div className="container-39">
      <h2>Manage Product</h2>
      <form action="" onSubmit={handleSubmit}>
        <InputField
          label={"Name"}
          type={"text"}
          placeholder={"Enter product name"}
          value={name}
          setValue={setName}
          required={true}
        />
        <InputField
          label={"Price"}
          type={"Number"}
          placeholder={"Enter product price"}
          value={price}
          setValue={setPrice}
          required={true}
        />
        <InputField
          label={"Category"}
          type={"text"}
          value={category}
          setValue={setCategory}
          placeholder={"Enter product category"}
          required={true}
        />
        <InputField
          label={"subCategory"}
          type={"text"}
          placeholder={"Enter product subCategory"}
          value={subCategory}
          setValue={setSubCategory}
          required={true}
        />
        <InputField
          label={"Stock"}
          type={"Number"}
          value={stock}
          setValue={setStock}
          placeholder={"Enter product stock"}
          required={true}
        />
        <div className="product-size">
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
        <label htmlFor="description">
          <div className="product-description">Description</div>
          <div className="pd">
            <textarea
              cols="30"
              rows="10"
              required
              placeholder="Product description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </label>
        <div>
          <div>Images</div>
          <input
            type="file"
            multiple
            onChange={(e) => handleImages(e.target.files)}
          />
        </div>
        <div>
          <button
            className="bg-red"
            type="button"
            onClick={handleDeleteProduct}
            disabled={isDeleteProductLoading ? true : false}
          >
            {isDeleteProductLoading ? "Deleting..." : "DELETE"}
          </button>
          <button
            type="submit"
            className="bg-green"
            disabled={isLoading ? true : false}
          >
            {isUpdateProductLoading ? "Updating..." : "SUBMIT"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ManageProduct;
