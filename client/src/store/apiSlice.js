import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = "http://localhost:3000"; 

export const apiSlice = createApi({
  reducerPath: 'api', // optional, but recommended
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }), // ❗️Corrected: should be `baseUrl`, not `baseUri`
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => '/api/categories' // ❗️Corrected: don't use `./`, just `/`
    }),
  }),
});

export const { useGetCategoriesQuery } = apiSlice; // to use the hook in components

export default apiSlice;
