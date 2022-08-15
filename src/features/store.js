import { configureStore } from '@reduxjs/toolkit'
import quiz from './quiz/quizSlice'
import { quizApi } from './quiz/quizServices'

const store = configureStore({
    reducer: {
        quiz,
        [quizApi.reducerPath]: quizApi.reducer 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(quizApi.middleware)
})

export default store