// @ts-nocheck

import axios from 'axios'
import API from '.'

export interface IAssignment {
  course: {
    id: string
    title: string
  }
  assignments: Array<{
    _id: string

    assignment_name: string
    questions: Array<{
      question: string
      status: string
      feedback: string
      solutionId: string
    }>
    assignmentStatus: string
    createdAt: string
    file_details: {
      fileName: string
      fileSize: number
      fileKey: string
      fileUrl: string
    } | null
  }>
}

export const handleGetAllAssignments = (): Promise<IAssignment[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(API.assignments, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        resolve(res.data?.assignments as IAssignment[])
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const getAssignmentById = (
  id: string
): Promise<
  IAssignment['assignments'][0] & {
    courseId: string
  }
> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API.assignment}/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        resolve(
          res.data?.assignment as IAssignment['assignments'][0] & {
            courseId: string
          }
        )
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const handleSubmitAnAssignment = (data: {
  assignmentId: string
  questionIndex: number
  courseId: string
  solutionLink?: string
  file?: File
}): Promise<string> => {
  return new Promise((resolve, reject) => {
    const formData = new FormData()
    formData.append('courseId', data.courseId)
    formData.append('assignmentId', data.assignmentId)
    formData.append('questionIndex', data.questionIndex.toString())
    if (data.file) {
      formData.append('file', data.file)
    } else {
      formData.append('solutionLink', data.solutionLink)
    }
    axios
      .post(API.submission, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        resolve(res.data?.message as string)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const handleUpdateAnAssignment = (data: {
  assignmentId: string
  questionIndex: number
  courseId: string
  solutionLink?: string
  file?: File
  solutionId: string
}): Promise<string> => {
  return new Promise((resolve, reject) => {
    const formData = new FormData()
    formData.append('courseId', data.courseId)
    formData.append('assignmentId', data.assignmentId)
    formData.append('questionIndex', data.questionIndex.toString())
    formData.append('solutionId', data.solutionId)

    if (data.file) {
      formData.append('file', data.file)
    } else {
      formData.append('solutionLink', data.solutionLink)
    }
    axios
      .put(API.submissionSolution, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        resolve(res.data?.message as string)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
