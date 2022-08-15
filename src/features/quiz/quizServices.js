import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { v4 as uuidv4 } from 'uuid';

export const quizApi = createApi({
    reducerPath: 'quizApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://opentdb.com/api.php'
    }),
    endpoints: (builder) => ({
        getQuestions: builder.query({
            query: ({category, amount}) => ({
                url: `?amount=${amount}&category=${category}`,
            }),
            transformResponse: response => {
                return response.results.map(question => ({...question, id: uuidv4()}))
            }
        })
    })
})

export const { useGetQuestionsQuery } =  quizApi