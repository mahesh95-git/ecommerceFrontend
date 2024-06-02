import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const orderApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1/order",
    credentials: "include",
  }),
  tagTypes: ["order"],
  endpoints: (builder) => ({
    createNewOrder: builder.mutation({
      query(body) {
  
        return {
          url: "/new",
          body,
          method: "POST",
        };
      },
      invalidatesTags: ["order"],
    }),
    getAllOrders: builder.query({
      query() {
        return {
          url: "/me",
        };
      },
      providesTags: ["order"],
    }),
    getSingleOrder: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const {
  useCreateNewOrderMutation,
  useGetAllOrdersQuery,
  useGetSingleOrderQuery,
} = orderApi;
