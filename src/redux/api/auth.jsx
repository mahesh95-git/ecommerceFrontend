import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query(body) {
        
        return {
          url: `login`,
          method: "POST",
          body,
        };
      },
    }),
    register: builder.mutation({
      query(body) {
        return {
          url: `register`,
          method: "POST",
          body,
        };
      },
    }),
    getUserDetail: builder.query({
      query() {
        return {
          url: `user`,
          credentials: "include",
        };
      },
    }),

    logout: builder.mutation({
      query() {
        return {
          url: "/logout",
          method: "POST",
        };
      },
    }),
    changePassword: builder.mutation({
      query(body) {
        return {
          url: "password/reset",
          method: "PUT",
          body,
        };
      },
    }),
    forgotPassword: builder.mutation({
      query(email) {
     
        return {
          url: "/password/forgot",
          method: "PUT",
         body:{
          email
         }
        };
      },
    }),
    resetPassword:builder.mutation({
      query(body){
       const {token,password,confirmPassword}=body
        return{
          url:`/password/reset/${token}`,
          method:"PUT",
          body:{
            password,
            confirmPassword
          }
        }
      }
    })
    ,
    updateUserDetails:builder.mutation({
      query(body){
        return{
          url:"/user/detailUpdate",
          method:"PUT",
          body
        }
      }
    })
  }),
});

export const {
  
  useLoginMutation,
  useRegisterMutation,
  useGetUserDetailQuery,
  useLogoutMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useUpdateUserDetailsMutation
  
} = authApi;
