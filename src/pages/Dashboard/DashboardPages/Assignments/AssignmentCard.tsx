import type { JSX } from 'react'
import Button from '../../../../components/buttons/Button'
import PrimaryButton from '../../../../components/buttons/PrimaryButton'
import { Link, useNavigate } from 'react-router-dom'

interface IAssignmentCard {
  assignment_name: string
  _id: string
  i: number
  questions: Array<{
    question: string
    status?: string
  }>
  status: string
}
const AssignmentCard = ({
  assignment_name,
  _id,
  i,
  status,
  questions,
}: IAssignmentCard): JSX.Element => {
  const navigate = useNavigate()
  const dueDate = '2021-09-30'
  return (
    <div className="h-[250px] w-[341px] justify-between dark:border-neutral-95 border rounded-2xl p-4 flex flex-col gap-3">
      <div className="flex justify-between dark:text-neutral-10/80 body-text-md">
        <span className="">Assignment {i + 1}</span>
        <span className="dark:border-neutral-95 border-neutral-30 border px-3 py-1 rounded-md">
          {status[0].toUpperCase() + status.slice(1)}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="h3 dark:text-neutral-10/90">
          {assignment_name.length > 20
            ? assignment_name.substring(0, 20) + '...'
            : assignment_name}
        </h3>
        <div className="flex gap-3 items-center">
          {questions.map((task, i) => (
            <div
              className={`px-3 py-2 max-w-28 rounded-md truncate ${(() => {
                if (task?.status?.toLowerCase() === 'approved') {
                  return 'bg-[#29BF1214] bg-opacity-10 text-[#29BF12]'
                } else if (task.status?.toLowerCase() === 'submitted') {
                  return 'bg-coral/10 text-coral'
                } else {
                  return 'bg-[#EF233C14] bg-opacity-10 text-[#EF233C]'
                }
              })()}`}
              key={i}
            >
              {task.question}
            </div>
          ))}
        </div>
      </div>
      {(() => {
        if (status === 'Completed') {
          return (
            // todo: change the text color in light mode is not working
            <Button
              onClick={() => {
                navigate(`/dashboard/myAssignment/submit/${_id}`)
              }}
              className="dark:bg-neutral-95 bg-neutral-20 text-neutral-85 dark:text-neutral-20"
            >
              View Now
            </Button>
          )
        } else if (status === 'Submitted') {
          return (
            <div className="flex gap-4 items-center ">
              <div className="body-text-sm dark:text-neutral-30 text-neutral-80">
                Deadline:{' '}
                <span className="dark:text-neutral-10 text-neutral-90 font-Montserrat text-[18px] font-[600] ml-2">
                  {dueDate}
                </span>
              </div>
              <Link
                to={`/dashboard/myAssignment/submit/${_id}`}
                className="w-3/4"
              >
                <PrimaryButton className="!h-[40px] w-full">
                  Update Now
                </PrimaryButton>
              </Link>
            </div>
          )
        } else {
          return (
            <div className="flex gap-4 items-center ">
              <div className="body-text-sm dark:text-neutral-30 text-neutral-80 ">
                Deadline:{' '}
                <span className="dark:text-neutral-10 text-neutral-90 font-Montserrat text-[18px] font-[600] ml-2">
                  {dueDate}
                </span>
              </div>
              <PrimaryButton
                onClick={() => {
                  navigate(`/dashboard/myAssignment/submit/${_id}`)
                }}
                className="!h-[40px] w-3/4"
              >
                Submit Now
              </PrimaryButton>
            </div>
          )
        }
      })()}
    </div>
  )
}
export default AssignmentCard
