import { useEffect, type JSX } from 'react'
import { handleGetUser } from '../../api/user'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { setIsAuthenticated, setUser } from '../../store/slices/userSlices'
import AppLoading from '../loaders/AppLoading'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
  const dispatch = useDispatch()

  useEffect(() => {
    handleGetUser()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  const { isError, isLoading, data } = useQuery({
    queryKey: ['user'],
    queryFn: handleGetUser,
    retry: 0,
  })

  useEffect(() => {
    if (!isLoading) {
      if (!isError && data) {
        dispatch(setIsAuthenticated(true))
        dispatch(setUser(data))
      }
    }
  }, [data, isError, isLoading])

  if (isLoading) {
    return <AppLoading />
  }
  return <div className="bg-white dark:bg-background">{children}</div>
}
export default RootLayout
