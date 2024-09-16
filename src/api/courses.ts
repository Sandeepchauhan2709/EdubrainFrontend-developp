import axios from 'axios'
import API from '.'
import { type ICourse } from '../types/course.types'

export const getAllCourses = async (): Promise<ICourse[]> => {
  try {
    const { data } = await axios.get(API.courses, {
      withCredentials: true,
    })
    return data.courses ?? []
  } catch (error) {
    return []
  }
}
