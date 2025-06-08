import { AUTH_URL } from "../../utils/constant";
import { apiSlice } from "../apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/sign-up`,
        method: "POST",
        body: data,
      }),
    }),
    signin: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/sign-in`,
        method: "POST",
        body: data,
      }),
    }),
    signout: builder.mutation({
      query: () => ({
        url: `${AUTH_URL}/sign-out`,
        method: "POST",
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: `${AUTH_URL}/current-user`,
        method: 'GET',
      }),
      keepUnusedDataFor: 60,
      providesTags: ['User'],
    }),
  }),
});

export const {
  useSignupMutation,
  useSigninMutation,
  useSignoutMutation,
  useGetUserQuery,
} = authApiSlice;
