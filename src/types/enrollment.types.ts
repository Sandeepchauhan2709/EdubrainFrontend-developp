export interface IEnrollmentDetails {
  courseId: string
  title: string
  enrollmentDate: string
  lastLectureName: string
  totalLectures: number
  completedLectures: number
  overallProgress: number
  category: string
  poster: {
    public_id: string
    url: string
  }
  slug: string
}

export interface IEnrollmentResponse {
  success: boolean
  enrollments: IEnrollmentDetails[]
}
