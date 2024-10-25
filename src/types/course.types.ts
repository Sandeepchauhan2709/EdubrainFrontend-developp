// export interface ICourse {
//   _id: string
//   title: string
//   description: string
//   slug: string
//   views: number
//   numOfVideos: number
//   discountedPercent: number
//   basePrice: number
//   total_duration: string
//   category: string
//   // createdBy: string
//   createdAt: string
//   poster: {
//     url: string
//     public_id: string
//   }
// }

export interface ICourse {
  _id: string
  title: string
  description?: string
  slug: string
  views: number
  numOfVideos: number
  discountedPercent: number
  basePrice: number
  total_duration: string
  category?: string
  syllabus?: Array<{
    title: string
    description: string
  }>
  features?: string[]

  // content?: CourseContent;
  // createdBy: string
  createdAt: string
  poster: {
    url: string
    public_id: string
  }
  sections: Array<{
    section_no: number
    section_name: string
    section_lectures: Array<{
      lecture_no: number
      lecture_name: string
    }>
  }>
}
