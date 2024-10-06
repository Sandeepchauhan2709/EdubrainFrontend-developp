import axios from 'axios'
import API from '.'
import { type IEnrollmentResponse } from '../types/enrollment.types'

export const getAllEnrolledCourses = async (): Promise<
  IEnrollmentResponse['enrollments']
> => {
  try {
    const { data } = await axios.get<IEnrollmentResponse>(API.enrolledcourses, {
      withCredentials: true,
    })
    return data.enrollments ?? []
  } catch (error) {
    console.error('Error fetching enrolled courses:', error)
    return []
  }
}
