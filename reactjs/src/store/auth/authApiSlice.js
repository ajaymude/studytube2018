import { AUTH_URL } from "../../utils/constant";
import { apiSlice } from "../apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    singup: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/sign-up`,
        method: "POST",
        body: data,
      }),
      singin: builder.mutation({
        query: (data) => ({
          url: `${AUTH_URL}/sign-in`,
          method: "POST",
          body: data,
        }),
      }),
      singout: builder.mutation({
        query: () => ({
          url: `${AUTH_URL}/sign-out`,
          method: "POST",
        }),
      }),
    }),
    getuser: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/current-user`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useSingupMutation,

} = authApiSlice;
