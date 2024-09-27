import axios from 'axios'
import API from '.'
import {
  type LoginFormData,
  type SignUpFormData,
} from '../components/reusable/AuthenticationModal/AuthenticationModal'
import toast from 'react-hot-toast'

export const signup = async (signUpData: SignUpFormData): Promise<unknown> => {
  try {
    const { data } = await axios.post(API.signup, signUpData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return data.user ?? []
  } catch (error) {
    return []
  }
}

export const login = async (loginData: LoginFormData): Promise<unknown> => {
  try {
    const { data } = await axios.post(API.login, loginData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log(data)
    return data.user ?? []
  } catch (error) {
    toast.error('logged in failed')
    console.log(error)
    return []
  }
}

export interface OtpData {
  email: string
  OTP: string
}

export const handleOtp = async (otpData: OtpData): Promise<unknown> => {
  try {
    axios
      .post(API.otp, otpData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.data)
      .catch((error) => error)
  } catch (error) {
    return error
  }
}

export interface ForgetPassData {
  email: string
}

export const handleForget = async (
  forgetPasswordData: ForgetPassData
): Promise<unknown> => {
  try {
    axios
      .post(API.forgotpassword, forgetPasswordData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.data)
      .catch((error) => error)
  } catch (error) {
    return error
  }
}

export interface CreateNewPassword {
  token: string
  data: {
    password: string
    confirmPassword: string
  }
}

export const handleNewPassword = async ({
  data,
  token,
}: CreateNewPassword): Promise<unknown> => {
  try {
    axios
      .put(`${API.resetpassword}/${token}`, data, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.data)
      .catch((error) => error)
  } catch (error) {
    return error
  }
}
