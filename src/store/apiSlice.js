import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      // Method GET: https://jsonplaceholder.typicode.com/users
      query: () => "/users",
    }),
    getUserDetail: builder.query({
      // Method GET: https://jsonplaceholder.typicode.com/users/{userId}
      query: (userId) => `/users/${userId}`,
    }),
    getPosts: builder.query({
      // Method GET: https://jsonplaceholder.typicode.com/posts
      query: () => "/posts",
    }),
    getPostsComment: builder.query({
      // Method GET: https://jsonplaceholder.typicode.com/posts/${postId}/comments
      query: (postId) => `/posts/${postId}/comments`,
    }),
    getPostDetail: builder.query({
      // Method GET: https://jsonplaceholder.typicode.com/posts/${postId}
      query: (postId) => `/posts/${postId}`,
    }),
  }),
});

export default apiSlice;
