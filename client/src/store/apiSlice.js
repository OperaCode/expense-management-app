import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = "http://localhost:3000"; 

export const apiSlice = createApi({
  reducerPath: 'api', 
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }), 
  endpoints: (builder) => ({
    // getCategories
    getCategories: builder.query({
        // ge: http://localhost:3000/api/categories
      query: () => '/api/categories'
    }),
    // get lables
    getLabels:builder.query({
        query:()=> '/api/labels'
    }),

    // add new transaction
    addTransaction:builder.mutation({
        query:(initialTransaction)=>({
            url:'/api/transaction',
            method: 'POST',
            body : initialTransaction
        })
    }),
    // delete transaction
    deleteTransaction : builder.mutation({
        query:recordId=>({
            url:'/api/transaction',
            method: "DELETE",
            body:recordId,
        })
    })
  }),
});

export const { useGetCategoriesQuery } = apiSlice; 

export default apiSlice;
