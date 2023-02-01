import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const Api = createApi({
    reducerPath: 'getPostApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1122/' }),
    endpoints: (builder) => ({
        getAllPost: builder.query({
            query: () => ({
                url: 'posts',
                method: 'GET',
            })
        }),
        getPostById: builder.query({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'GET'
            })
        }),
        getPostBySpecificLimit: builder.query({
            query: (number) => ({
                url: `posts?_limit=${number}`,
                method: 'GET'
            })
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'DELETE'
            })
        }),
        post: builder.mutation({
            query: (postData) => ({
                url: `posts`,
                method: 'POST',
                body: postData,
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            })
        }),
        update: builder.mutation({
            query: (updatePostData) => {
                const { id, ...data } = updatePostData
                return {
                    url: `posts/${id}`,
                    method: 'PUT',
                    body: data,
                    headers: { 'Content-type': 'application/json; charset=UTF-8' }
                }
            }
        })
    })
})
export const {
    useGetAllPostQuery,
    useGetPostByIdQuery,
    useGetPostBySpecificLimitQuery,
    useDeletePostMutation,
    usePostMutation,
    useUpdateMutation
} = Api