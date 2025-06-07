import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../utils/constant";

const baseQuery = fetchBaseQuery({ baseUrl: API_BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
