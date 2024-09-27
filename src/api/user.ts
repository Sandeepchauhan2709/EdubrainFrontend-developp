import axios from 'axios'
import API from '.'

export const handleGetUser = (): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    axios
      .get(API.user, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        resolve(res.data?.user)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const handleLogout = (): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    axios
      .get(API.logout, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        resolve(res.data?.user)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
