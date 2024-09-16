import lt from '../../../../assets/icons/lt.svg'
import gt from '../../../../assets/icons/gt.svg'
import SubmitCard from './SubmitCard'
import DashboardLayout from '../../../../components/layouts/DashboardLayout'
import { useParams } from 'react-router-dom'
import { getAssignmentById } from '../../../../api/assignments'
import { useQuery } from '@tanstack/react-query'
const SubmitAssignment = (): JSX.Element => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAssignmentById(id!),
    queryKey: ['assignment', id],
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error...</div>
  return (
    <DashboardLayout>
      <main className="h-full w-full pb-32 pt-8 flex flex-col gap-5 md:gap-12 min-h-[calc(100vh-100px)]">
        <div className="flex self-start items-center gap-2 text-neutral-90 dark:text-neutral-20">
          <span>Assignments</span>
          <span>&gt;</span>
          <span>{data?._id}</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-[600px] ">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <h3 className="h3 dark:text-neutral-10">{data?._id}</h3>
                <div className="flex gap-6 items-center">
                  <button>
                    <img src={lt} alt="lt" />
                  </button>
                  <button>
                    <img src={gt} alt="lt" />
                  </button>
                </div>
              </div>
              <span className="body-text-md text-neutral-80 dark:text-neutral-20">
                {data?.assignment_name}
              </span>
              <hr className="text-neutral-30 dark:text-neutral-80" />
              <div className="flex flex-col w-full items-center justify-center mt-5 gap-6">
                {data?.questions.map((task, i) => (
                  <SubmitCard
                    key={i}
                    task={{
                      title: task.question,
                      status: task.status,
                      solutionId: task.solutionId,
                      feedback: task.feedback,
                    }}
                    i={i}
                    id={data._id}
                    courseId={data.courseId}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  )
}
export default SubmitAssignment
