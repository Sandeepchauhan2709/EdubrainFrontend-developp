import type ASSIGNMENTS from '../assets/mockData/assignments'

export const filterAssignments = (
  courseData: (typeof ASSIGNMENTS)[number],
  selectedAssignmentType: string
): Array<{
  status: 'submitted' | 'pending' | 'completed'
  title: string
  dueDate: string
  tasks: Array<{
    title: string
    status: 'submitted' | 'pending' | 'checked'
  }>
}> => {
  const data = courseData.assignments.filter(
    (assignment) =>
      assignment.status === selectedAssignmentType.split(' ')[0].toLowerCase()
  )
  if (data.length === 0) return courseData.assignments
  return data
}

export const getTabButtons = (
  assignments: (typeof ASSIGNMENTS)[number]['assignments']
): string[] => {
  const pendingAssignments = assignments.filter(
    (assignment) => assignment.status === 'pending'
  )
  const completedAssignments = assignments.filter(
    (assignment) => assignment.status === 'completed'
  )
  const submittedAssignments = assignments.filter(
    (assignment) => assignment.status === 'submitted'
  )
  const tabButtons = [
    'All',
    `Pending (${pendingAssignments?.length})`,
    `Submitted (${submittedAssignments?.length})`,
    `Completed (${completedAssignments?.length})`,
  ]
  return tabButtons
}
