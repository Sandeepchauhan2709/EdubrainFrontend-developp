/**
 * All the route of backend API
 */
const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL + '/api/v1'

const API = {
  // course
  courses: BASE_URL + '/courses',
  coursedata: BASE_URL + '/coursesdata',
  coursedatabyslug: (slug: any) => `${BASE_URL}/coursesdata/${slug}`,
  courseprogress: BASE_URL + '/progress/',
  enrolledcourses: BASE_URL + '/my-enrollments',
  enroll: BASE_URL + '/enroll/',
  savepartialProgress: BASE_URL + '/partial/',
  lastLecture: BASE_URL + '/progress/lastLecture/',
  // savecompleteProgress: BASE_URL + '/complete-course',
  signup: BASE_URL + '/register',
  otp: BASE_URL + '/verifyOTP',
  login: BASE_URL + '/login',
  forgotpassword: BASE_URL + '/forgotpassword',
  resetpassword: BASE_URL + '/resetpassword',
  user: BASE_URL + '/me',
  logout: BASE_URL + '/logout',

  // assignment
  assignments: BASE_URL + '/assignments',
  assignment: BASE_URL + '/assignment',
  submission: BASE_URL + '/Submission',
  submissionSolution: BASE_URL + '/Submission/solution',
}

export default API
