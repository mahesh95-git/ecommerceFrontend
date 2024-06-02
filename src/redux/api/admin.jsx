import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const adminApi = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1/admin",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: ({ page, limit }) => `/user/allUser?page=${page}&limit=${limit}`,
    }),
    getAllTransactions: builder.query({
      query: (page, limit) => `/order/allOrders?page=${page}&limit=${limit}`,
    }),
    addNewProduct: builder.mutation({
      query: (body) => {
        return {
          url: "/product/new",
          method: "POST",
          body,
        };
      },
    }),
    manageOrder: builder.mutation({
      query: ({ status, orderId }) => {
        return {
          url: `/order/${orderId}`,
          method: "PUT",
          body: {
            status,
          },
        };
      },
    }),
    updateProductDetails: builder.mutation({
      query: ({ productId, formData }) => {
        return {
          url: `/product/${productId}`,
          method: "PATCH",
          body: formData,
        };
      },
    }),
    deleteProduct: builder.mutation({
      query: (productId) => {
        return {
          url: `/product/${productId}`,
          method: "DELETE",
        };
      },
    }),
    getUser: builder.query({
      query: (userId) => `user/${userId}`,
    }),
    updateRole: builder.mutation({
      query: ({ userId, role }) => {
        return {
          url: `/user/${userId}`,
          method: "PUT",
          body: {
            role,
          },
        };
      },
    }),
    deleteUser: builder.mutation({
      query: (userId) => {
        return {
          url: `/user/${userId}`,
          method: "DELETE",
        };
      },
    }),
    getDashboardInfo: builder.query({
      query: () => "analyses",
    }),
  }),
});

export const {
  useGetAllTransactionsQuery,
  useGetAllUsersQuery,
  useAddNewProductMutation,
  useManageOrderMutation,
  useUpdateProductDetailsMutation,
  useDeleteProductMutation,
  useGetUserQuery,
  useDeleteUserMutation,
  useUpdateRoleMutation,
  useGetDashboardInfoQuery,
} = adminApi;
