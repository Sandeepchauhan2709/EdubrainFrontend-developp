import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { setActiveTab, setIsModalOpen } from '../store/slices/modalSlices'

const ResetPassword = (): JSX.Element => {
  const { token } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    if (token) {
      navigate('/', {
        state: { token },
      })
      dispatch(setActiveTab('createNewPassword'))
      dispatch(setIsModalOpen(true))
    }
  }, [token])
  return (
    <div>
      <h1 className="text-xl text-white">Loading...</h1>
    </div>
  )
}

export default ResetPassword
