import { useState, type JSX, useEffect } from 'react'
import AssessmentCard from './AssignmentCard'
import DashboardLayout from '../../../../components/layouts/DashboardLayout'
import { useQuery } from '@tanstack/react-query'
import {
  type IAssignment,
  handleGetAllAssignments,
} from '../../../../api/assignments'

const COURSE_STATUS = ['All', 'Completed', 'Pending', 'Submitted']

const AssignmentPage = (): JSX.Element => {
  const [selectedCourse, setSelectedCourse] = useState('')
  const [filteredAssignments, setFilteredAssignments] =
    useState<IAssignment['assignments']>()
  const [selectedAssignmentType, setSelectedAssignmentType] =
    useState<string>('All')

  const { data, isLoading, isError } = useQuery({
    queryFn: handleGetAllAssignments,
    queryKey: ['assignments'],
  })
  const { data: user } = useQuery<{
    playlist: Array<{
      course: string
      assignment: string
    }>
  }>({
    queryKey: ['user'],
  })

  useEffect(() => {
    if (user) {
      setSelectedCourse(user?.playlist[0]?.course ?? '')
    }
  }, [user])

  useEffect(() => {
    if (data) {
      const course = data.find(
        (assignment) => assignment.course.id === selectedCourse
      )
      if (selectedAssignmentType === 'All') {
        setFilteredAssignments(course?.assignments)
      } else {
        setFilteredAssignments(
          course?.assignments.filter(
            (assignment) =>
              assignment.assignmentStatus === selectedAssignmentType
          )
        )
      }
    }
  }, [selectedCourse, data, selectedAssignmentType])

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error...</div>
  if (user?.playlist.length === 0) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center dark:text-neutral-10 text-neutral-80 h-44">
          <span>No assignments found</span>
        </div>
      </DashboardLayout>
    )
  }
  console.log(COURSE_STATUS)
  return (
    <DashboardLayout>
      <main className="h-full w-full flex flex-col gap-5 min-h-[calc(100vh-100px)]">
        <div className="mt-12 flex flex-col gap-4">
          <h3 className="h3 dark:text-neutral-10">My Assignments</h3>
          <hr className="w-full h-0.5 dark:text-neutral-10/10 text-neutral-30" />
        </div>
        <div className="flex justify-between dark:text-neutral-10/80">
          <div className="flex gap-4 items-center">
            {COURSE_STATUS.map((tab, i) => (
              <button
                key={i}
                className={`
                  border rounded-lg py-1 px-4 min-w-12 body-text-md 
                  ${
                    selectedAssignmentType === tab
                      ? 'dark:border-white/60 border-neutral-60 dark:text-neutral-10 '
                      : 'dark:border-white/10 border-neutral-30 dark:text-neutral-40 text-neutral-70'
                  }`}
                onClick={() => {
                  setSelectedAssignmentType(tab)
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          <select
            className="max-w-fit cursor-pointer bg-[transparent] border border-neutral-30 text-neutral-90 dark:text-neutral-30 dark:border-white/30 px-3 rounded-lg py-2"
            value={selectedCourse}
            onChange={(e) => {
              setSelectedCourse(e.currentTarget.value)
            }}
          >
            {data?.map((assignment, i) => (
              <option
                key={i}
                value={assignment.course.id}
                className="dark:text-neutral-10 text-neutral-80 dark:bg-neutral-90"
              >
                {assignment.course.title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-6">
          <div className="flex items-center justify-center gap-2">
            <div className="bg-green h-4 w-4 rounded-md" />
            <span className="dark:text-neutral-20 text-neutral-80">
              Approved
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="bg-coral h-4 w-4 rounded-md" />
            <span className="dark:text-neutral-20 text-neutral-80">
              Submitted
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="bg-red h-4 w-4 rounded-md" />
            <span className="dark:text-neutral-20 text-neutral-80">
              Pending/Rejected
            </span>
          </div>
        </div>
        <div className="flex gap-6 flex-wrap">
          {filteredAssignments?.length === 0 ? (
            <div className="text-center w-full dark:text-neutral-10 text-neutral-80 h-44 flex items-center flex-col justify-center">
              <span>No assignments found</span>
            </div>
          ) : (
            filteredAssignments?.map((assignment, i) => (
              <AssessmentCard
                key={i}
                assignment_name={assignment.assignment_name}
                _id={assignment._id}
                i={i}
                questions={assignment.questions}
                status={assignment.assignmentStatus}
              />
            ))
          )}
        </div>
      </main>
    </DashboardLayout>
  )
}
export default AssignmentPage
