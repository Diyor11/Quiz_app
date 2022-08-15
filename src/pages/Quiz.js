import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Pagination from '../components/Pagination'
import QuizCard from '../components/QuizCard'
import { useGetQuestionsQuery } from '../features/quiz/quizServices'
import { useDispatch } from 'react-redux'
import { setQuestions } from '../features/quiz/quizSlice'
export default function Quiz() {

    const params = useParams()
    const dispatch = useDispatch()

  const { data: questions, isError, error, isLoading } = useGetQuestionsQuery(params)
  
  useEffect(() => {
    dispatch(setQuestions(questions ? questions:[]))
  }, [dispatch, questions])
  
  if(isError) {
    console.log(error)
    return <h1>Unexpected Error</h1>
  }

  if(isLoading) {
    return <h1>Loading ...</h1>
  }

  return (
    <div>
      <Pagination />
      <QuizCard />
    </div>
  )
}
