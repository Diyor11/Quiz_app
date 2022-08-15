import { useNavigate } from "react-router-dom"
import { ModalCom } from "../global.styles"
import { useDispatch } from "react-redux"
import { reStart } from "../features/quiz/quizSlice"

export default function Modal({totalBall, setTotalBall}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const leave = () => {
        navigate('/')
        dispatch(reStart())
    }   

  return (
    <ModalCom show={totalBall}>
        <div className="box p-4 rounded-md bg-white md:min-w-[400px] w-[300px]">
            <h2 className="text-3xl">Your result</h2>
            <div className='mt-2'>
                <h3 className="text-2xl text-center">{totalBall?.correctAnswers}</h3>
                <h4 className="text-xl text-center">or</h4>
                <h3 className="text-2xl text-center">{totalBall?.procent} %</h3>
            </div>
            <button onClick={leave} className="w-full block border border-red-600 text-red-600 py-2 rounded-md text-center text-lg mt-2">Go Home</button>
            <button onClick={() => setTotalBall(null)} className="w-full block border border-blue-600 text-blue-600 py-2 rounded-md text-center text-lg mt-2">Ok</button>
        </div>
    </ModalCom>
  )
}
