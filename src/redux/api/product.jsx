import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const product = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1/",
    credentials: "include",
  }),
  tagTypes: ["review"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ page, limit }) => {
        return {
          url: `products?page=${page}&limit=${limit}`,
        };
      },
    }),
    productDetail: builder.query({
      query(productId) {
        return {
          url: `product/${productId}`,
        };
      },
      providesTags: ["review"],
    }),
    productReview: builder.mutation({
      query({ review, productId }) {

        return {
          url: `/product/reviews/${productId}`,
          method: "PUT",
          body: {
            ...review,
          },
        };
      },
      invalidatesTags: ["review"],
    }),
    getLatestProducts: builder.query({
      query() {
        return {
          url: "products/new",
        };
      },
    }),
  }),
});
export const {
  useGetAllProductsQuery,
  useProductDetailQuery,
  useProductReviewMutation,
  useGetLatestProductsQuery,
} = product;
