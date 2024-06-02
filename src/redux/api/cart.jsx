import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const cartApi = createApi({
  reducerPath: "cart",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1/cart",
    credentials: "include",
  }),
 
  tagTypes: ["cartItems"],
  endpoints: (builder) => ({
    getAllCartItems: builder.query({
      query() {
        return {
          url: "/allItems",
        };
      },

      providesTags: ["cartItems"],
    }),
    removeItem: builder.mutation({
      query(productId) {
        return {
          url: `/deleteItem/${productId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["cartItems"],
    }),
    updateItemQuantity: builder.mutation({
      query({ productId, productQuantity }) {
    
        return {
          url: `/update`,
          method: "PUT",
          body: {
            productId,
            productQuantity,
          },
        };
      },
      invalidatesTags: ["cartItems"],
    }),

  
    addToCart: builder.mutation({
      query({productId, productQuantity,size}) {
  
        return {
          url: "/addProduct",
          method: "PUT",
          body: {
            productId,
           productQuantity,
            size
          },
        };
      },
      invalidatesTags:["cartItems"]
    }),

    clearCart:builder.mutation({
      query(){
        return{
          url:"clearCart",
          method:"DELETE"
        }
      },
      invalidatesTags:["cartItems"]
    })
    

  }),
});
export const {
  useGetAllCartItemsQuery,
  useRemoveItemMutation,
  useUpdateItemQuantityMutation,
  useAddToCartMutation,
  useClearCartMutation,
} = cartApi;
