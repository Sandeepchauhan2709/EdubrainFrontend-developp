import React, { useState, useEffect } from 'react'
import image from '../../../assets/images/Frame 664.svg'
import number1 from '../../../assets/images/Number.png'
import number2 from '../../../assets/images/Number2.png'
import number3 from '../../../assets/images/Number3.png'
import number4 from '../../../assets/images/Number4.png'
import number5 from '../../../assets/images/Number5.png'
import Progressbutton from './Progessbutton'
import FAQs from '../../../components/reusable/FAQs'
import FAQ from '../../../assets/data/faq'
import CertificateModal from './CertificateModal'
import { getAllEnrolledCourses } from '../../../api/enrolledCourses'
import { type IEnrollmentDetails } from '../../../types/enrollment.types'
import CertificatePreview from './CertificatePreview'
import { handleGetUser } from '../../../api/user'

interface CertificationState {
  courseCompleted: boolean
  showCertificate: boolean
  userName: string
  courseName: string
  completionDate: string
  overallProgress: number
  error: string | null
  loading: boolean
  enrollmentDetails?: IEnrollmentDetails
}
interface UserData {
  name: string
}
// const Certification = ():void => {
const Certification: React.FC = (): JSX.Element => {
  const [state, setState] = useState<CertificationState>({
    courseCompleted: false,
    showCertificate: false,
    userName: 'John Doe',
    courseName: '',
    completionDate: '',
    overallProgress: 0,
    error: null,
    loading: true,
  })
  interface StepProps {
    index: number
    number: number
    title: string
    description: string
  }

  useEffect(() => {
    const fetchUserData = async (): Promise<void> => {
      try {
        setState((prev) => ({ ...prev, loading: true }))

        const userData = (await handleGetUser()) as UserData
        setState((prev) => ({
          ...prev,
          userName: userData?.name || 'John Doe',
          error: null,
        }))
      } catch (error) {
        console.error('Error fetching user data:', error)
        setState((prev) => ({
          ...prev,
          error: 'Failed to fetch user data',
        }))
      } finally {
        setState((prev) => ({ ...prev, loading: false }))
      }
    }

    const fetchEnrollmentData = async (): Promise<void> => {
      try {
        setState((prev) => ({ ...prev, loading: true }))

        const enrollmentDetails = await getAllEnrolledCourses()
        console.log('Enrollment Details:', enrollmentDetails)

        if (!enrollmentDetails || !enrollmentDetails.length) {
          throw new Error('No enrolled courses found')
        }

        const latestEnrollment = enrollmentDetails[0]

        setState((prev) => ({
          ...prev,
          courseName: latestEnrollment.title || '',
          overallProgress: parseInt(
            latestEnrollment.overallProgress?.toString() || '0'
          ),
          courseCompleted:
            parseInt(latestEnrollment.overallProgress?.toString() || '0') >= 1,
          completionDate: latestEnrollment.enrollmentDate
            ? new Date(latestEnrollment.enrollmentDate).toLocaleDateString(
                'en-US',
                {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }
              )
            : '',
          enrollmentDetails: latestEnrollment,
          error: null,
        }))
      } catch (error) {
        console.error('Error fetching enrollment data:', error)
        setState((prev) => ({
          ...prev,
          error:
            error instanceof Error
              ? error.message
              : 'Failed to fetch enrollment data',
        }))
      } finally {
        setState((prev) => ({ ...prev, loading: false }))
      }
    }

    fetchUserData()
    fetchEnrollmentData()
  }, [])

  const steps = [
    {
      number: 1,
      title: 'Enroll in a Course',
      description: 'Engage in lectures and complete requirements.',
    },
    {
      number: 2,
      title: 'Complete Course Requirements',
      description: 'Complete all required lectures and assignments.',
    },
    {
      number: 3,
      title: 'Submit Assessments',
      description: 'Submit assessments to complete the course.',
    },
    {
      number: 4,
      title: 'Achieve Certification Criteria',
      description: 'Meet all certification requirements.',
    },
    {
      number: 5,
      title: 'Receive Your Certificate',
      description: 'Download your certificate upon completion.',
    },
  ]

  const handleCertificateDownload = (): void => {
    if (!state.courseCompleted) {
      alert('Please complete the course before downloading your certificate.')
      return
    }

    if (!state.userName || !state.courseName || !state.completionDate) {
      alert('Certificate information is incomplete. Please try again later.')
      return
    }

    setState((prev) => ({ ...prev, showCertificate: true }))
  }

  // const Step = ({ index, number, title, description }) => {
  const Step: React.FC<StepProps> = ({ index, number, title, description }) => {
    const stepImages = [image, number1, number2, number3, number4, number5]
    const topPosition = index === 0 ? 'top-0' : 'top-[-76px]'

    return (
      <div
        className="relative border dark:border-[#FFFFFF8A] p-2 rounded-xl hover:border-primary transition-colors"
        role="listitem"
      >
        <img
          src={stepImages[number]}
          className={`absolute left-[380px] ${topPosition}`}
          alt={`Step ${number}`}
          loading="lazy"
        />
        <div className="p-2 font-Roboto flex flex-col gap-4">
          <h3 className="text-[24px] text-black dark:text-white font-medium">
            {title}
          </h3>
          <p className="text-[16px] text-black dark:text-[#FFFFFF8A]">
            {description}
          </p>
        </div>
      </div>
    )
  }

  if (state.error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
          <p className="text-red-600 dark:text-red-400">{state.error}</p>
          <button
            onClick={() => {
              window.location.reload()
            }}
            className="mt-2 text-sm text-red-600 dark:text-red-400 underline"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex flex-col lg:flex-row gap-16 py-16 max-w-[1440px] mx-auto px-4">
      {/* Left Column */}
      <div className="flex-1 max-w-[600px]">
        <img
          src={image}
          alt="Certificate Process Illustration"
          className="w-full h-auto mb-6"
          loading="lazy"
        />
        <div className="flex pt-4">
          <h1 className="text-[24px] font-Montserrat font-bold text-black dark:text-white">
            Earn your certificate in just {steps.length} steps
          </h1>
        </div>
        <div className="py-6 flex flex-col gap-8" role="list">
          {steps.map((step, index) => (
            <Step key={index} index={index} {...step} />
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 max-w-[650px] space-y-10">
        <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 h-[500px] flex items-center justify-center shadow-sm">
          {state.loading ? (
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="text-neutral-600 dark:text-neutral-300">
                Loading certificate preview...
              </p>
            </div>
          ) : (
            <CertificatePreview
              userName={state.userName}
              courseName={state.courseName}
              completionDate={state.completionDate}
              isCompleted={state.courseCompleted}
            />
          )}
        </div>

        <p className="text-[16px] text-black dark:text-white font-Roboto">
          Download your certificate instantly upon course completion—an emblem
          of your accomplished learning journey awaits you.
        </p>

        <Progressbutton
          progressText={`Complete Course (${state.overallProgress}%)`}
          completeText="Download Your Certificate"
          onClick={handleCertificateDownload}
          disabled={!state.courseCompleted}
        />

        <div className="space-y-6">
          <h2 className="text-black dark:text-white text-[36px] font-bold">
            Frequently Asked Questions
          </h2>
          <FAQs
            faqs={FAQ.faqs}
            faqButtonProps={{
              className:
                '!bg-background !border-neutral-95 hover:border-primary transition-colors',
            }}
          />
        </div>
      </div>

      {/* Certificate Modal */}
      {state.showCertificate && (
        <CertificateModal
          onClose={() => {
            setState((prev) => ({ ...prev, showCertificate: false }))
          }}
          userName={state.userName}
          courseName={state.courseName}
          completionDate={state.completionDate}
          logoUrl="logoUrl"
        />
      )}
    </div>
  )
}

export default Certification

// / import React, { useState, useEffect } from 'react'
// import image from '../../../assets/images/Frame 664.svg'
// import number1 from '../../../assets/images/Number.png'
// import number2 from '../../../assets/images/Number2.png'
// import number3 from '../../../assets/images/Number3.png'
// import number4 from '../../../assets/images/Number4.png'
// import number5 from '../../../assets/images/Number5.png'
// import Progressbutton from './Progessbutton'
// import FAQs from '../../../components/reusable/FAQs'
// import FAQ from '../../../assets/data/faq'
// import CertificateModal from './CertificateModal'
// import API from '../../../api/index'

// const Certification: React.FC = () => {
//   const [courseCompleted, setCourseCompleted] = useState(false);
//   const [showCertificate, setShowCertificate] = useState(false);
//   const [userName, setUserName] = useState('John Doe'); // Replace with actual user name
//   const [courseName, setCourseName] = useState('React Development'); // Replace with actual course name
//   const [completionDate, setCompletionDate] = useState(''); // Will be set when course is completed

//   // Simulating course completion check
//   useEffect(() => {
//     // Replace this with actual course completion logic
//     const checkCourseCompletion = () => {
//       // Simulating an API call or checking local storage
//       setTimeout(() => {
//         setCourseCompleted(true);
//         setCompletionDate(new Date().toLocaleDateString());
//       }, 2000);
//     };

//     checkCourseCompletion();
//   }, []);

//   const steps = [
//     {
//       number: 1,
//       title: 'Enroll in a Course',
//       description:
//         'Engage in lectures, attend live sessions, and join project-based learning to meet course requirements.',
//     },
//     {
//       number: 2,
//       title: 'Complete Courses Requirements',
//       description:
//         'Engage in lectures, attend live sessions, and join project-based learning to meet courses requirements.',
//     },
//     {
//       number: 3,
//       title: 'Submit Assessments',
//       description:
//         'Engage in lectures, attend live sessions, and join project-based learning to meet courses requirements.',
//     },
//     {
//       number: 4,
//       title: 'Achieve Certification Criteria',
//       description:
//         'Engage in lectures, attend live sessions, and join project-based learning to meet courses requirements.',
//     },
//     {
//       number: 5,
//       title: 'Receive Your Certificate',
//       description:
//         'Engage in lectures, attend live sessions, and join project-based learning to meet courses requirements.',
//     },
//   ]

//   const handleCertificateDownload = () => {

//     if (courseCompleted) {
//       setShowCertificate(true)
//     } else {
//       alert("You haven't completed the course yet!")
//     }
//   }

//   return (
//     <div className="relative flex gap-16 py-16">
//       <div className="flex flex-col w-[600px]">
//         <img src={image} alt="Certificate Image" />
//         <div className="flex pt-4">
//           <span className="text-[24px] font-Montserrat font-bold text-black dark:text-white">
//             Earn your certificate in just {steps.length} steps
//           </span>
//         </div>
//         <div className="py-6 flex flex-col gap-8">
//           {steps.map((step, index) => (
//             <Step key={index} index={index} {...step} />
//           ))}
//         </div>
//       </div>
//       <div className="flex flex-col w-[650px] gap-10 relative">
//         <div className="justify-centerw-[523px] h-[500px] bg-white rounded-xl"></div>
//         <span className="text-[16px] text-black dark:text-white font-Roboto">
//           Download your certificate instantly upon course completion—an emblem
//           of your accomplished learning journey awaits you.
//         </span>
//         <Progressbutton
//           progressText="complete course"
//           completeText="Download your certificate"
//           onClick={handleCertificateDownload}
//           disabled={!courseCompleted}
//         />
//         <span className="text-black dark:text-[white] text-[36px] p-0">
//           Frequently Asked Questions
//         </span>
//         <FAQs
//           faqs={FAQ.faqs}
//           faqButtonProps={{
//             className: '!bg-background !border-neutral-95',
//           }}
//         />
//       </div>
//       {showCertificate && (
//         <CertificateModal
//           onClose={() => {setShowCertificate(false)}}
//           userName={userName}
//           courseName={courseName}
//           completionDate={completionDate}
//           logoUrl={"logoUrl"}
//         />
//       )}
//     </div>
//   )
// }

// interface StepProps {
//   index: number
//   number: number
//   title: string
//   description: string
// }

// const Step: React.FC<StepProps> = ({ index, number, title, description }) => {
//   const stepImages = [image, number1, number2, number3, number4, number5]
//   const topPosition = index === 0 ? 'top-0' : 'top-[-76px]'
//   return (
//     <div className="relative border  dark:border-[#FFFFFF8A]  p-2 rounded-xl">
//       <img
//         src={stepImages[number]}
//         className={`absolute left-[380px] ${topPosition}`}
//         alt={`Step ${number}`}
//       />
//       <div className="p-2 font-Roboto flex flex-col gap-4">
//         <span className="text-[24px] text-black dark:text-white">{title}</span>
//         <p className="text-[16px] text-black dark:text-[#FFFFFF8A]">
//           {description}
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Certification

// import React, { useState, useEffect } from 'react'
// import image from '../../../assets/images/Frame 664.svg'
// import number1 from '../../../assets/images/Number.png'
// import number2 from '../../../assets/images/Number2.png'
// import number3 from '../../../assets/images/Number3.png'
// import number4 from '../../../assets/images/Number4.png'
// import number5 from '../../../assets/images/Number5.png'
// import Progressbutton from './Progessbutton'
// import FAQs from '../../../components/reusable/FAQs'
// import FAQ from '../../../assets/data/faq'
// import CertificateModal from './CertificateModal'

// const Certification: React.FC = () => {
//   const [courseCompleted, setCourseCompleted] = useState(false);
//   const [showCertificate, setShowCertificate] = useState(false);
//   const [userName, setUserName] = useState('John Doe'); // Replace with actual user name
//   const [courseName, setCourseName] = useState('React Development'); // Replace with actual course name
//   const [completionDate, setCompletionDate] = useState(''); // Will be set when course is completed

//   // Simulating course completion check
//   useEffect(() => {
//     const checkCourseCompletion = () => {
//       setTimeout(() => {
//         setCourseCompleted(true);
//         setCompletionDate(new Date().toLocaleDateString());
//       }, 2000);
//     };

//     checkCourseCompletion();
//   }, []);

//   const steps = [
//     {
//       number: 1,
//       title: 'Enroll in a Course',
//       description:
//         'Engage in lectures, attend live sessions, and join project-based learning to meet course requirements.',
//     },
//     {
//       number: 2,
//       title: 'Complete Courses Requirements',
//       description:
//         'Engage in lectures, attend live sessions, and join project-based learning to meet courses requirements.',
//     },
//     {
//       number: 3,
//       title: 'Submit Assessments',
//       description:
//         'Engage in lectures, attend live sessions, and join project-based learning to meet courses requirements.',
//     },
//     {
//       number: 4,
//       title: 'Achieve Certification Criteria',
//       description:
//         'Engage in lectures, attend live sessions, and join project-based learning to meet courses requirements.',
//     },
//     {
//       number: 5,
//       title: 'Receive Your Certificate',
//       description:
//         'Engage in lectures, attend live sessions, and join project-based learning to meet courses requirements.',
//     },
//   ];

//   const handleCertificateDownload = ():void => {
//     if (courseCompleted) {
//       setShowCertificate(true)
//     } else {
//       alert("You haven't completed the course yet!")
//     }
//   }

//   return (
//     <div className="relative flex gap-16 py-16">
//       <div className="flex flex-col w-[600px]">
//         <img src={image} alt="Certificate Image" />
//         <div className="flex pt-4">
//           <span className="text-[24px] font-Montserrat font-bold text-black dark:text-white">
//             Earn your certificate in just {steps.length} steps
//           </span>
//         </div>
//         <div className="py-6 flex flex-col gap-8">
//           {steps.map((step, index) => (
//             <Step key={index} index={index} {...step} />
//           ))}
//         </div>
//       </div>
//       <div className="flex flex-col w-[650px] gap-10 relative">
//         <div className="w-[523px] h-[500px] bg-white rounded-xl"></div>
//         <span className="text-[16px] text-black dark:text-white font-Roboto">
//           Download your certificate instantly upon course completion—an emblem
//           of your accomplished learning journey awaits you.
//         </span>
//         <Progressbutton
//           progressText=""
//           completeText="Download your certificate"
//           onClick={handleCertificateDownload}
//           disabled={!courseCompleted}
//         />
//         <span className="text-black dark:text-[white] text-[36px] p-0">
//           Frequently Asked Questions
//         </span>
//         <FAQs
//           faqs={FAQ.faqs}
//           faqButtonProps={{
//             className: '!bg-background !border-neutral-95',
//           }}
//         />
//       </div>
//       {showCertificate && (
//         <CertificateModal
//           onClose={() => {setShowCertificate(false)}}
//           userName={userName}
//           courseName={courseName}
//           completionDate={completionDate}
//           logoUrl={"logoUrl"}
//         />
//       )}
//     </div>
//   )
// }

// interface StepProps {
//   index: number
//   number: number
//   title: string
//   description: string
// }

// const Step: React.FC<StepProps> = ({ index, number, title, description }) => {
//   const stepImages = [number1, number2, number3, number4, number5]
//   const topPosition = index === 0 ? 'top-0' : 'top-[-76px]';

//   return (
//     <div className="relative border dark:border-[#FFFFFF8A] p-2 rounded-xl">
//       <img
//         src={stepImages[number - 1]}
//         className={`absolute left-[380px] ${topPosition}`}
//         alt={`Step ${number}`}
//       />
//       <div className="p-2 font-Roboto flex flex-col gap-4">
//         <span className="text-[24px] text-black dark:text-white">{title}</span>
//         <p className="text-[16px] text-black dark:text-[#FFFFFF8A]">
//           {description}
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Certification

// import React from 'react'
// import image from '../../../assets/images/Frame 664.svg'
// import number1 from '../../../assets/images/Number.png'
// import number2 from '../../../assets/images/Number2.png'
// import number3 from '../../../assets/images/Number3.png'
// import number4 from '../../../assets/images/Number4.png'
// import number5 from '../../../assets/images/Number5.png'
// import Progressbutton from './Progessbutton'
// import FAQs from '../../../components/reusable/FAQs'
// import FAQ from '../../../assets/data/faq'

// const Index: React.FC = () => {
//   const steps = [
//     {
//       number: 1,
//       title: 'Enroll in a Course',
//       description:
//         'Engage in lectures, attend live sessions, and join project-based learning to meet course requirements.',
//     },
//     {
//       number: 2,
//       title: 'Complete Courses Requirements',
//       description:
//         'Engage in lectures, attend live sessions, and join project-based learning to meet courses requirements.',
//     },
//     {
//       number: 3,
//       title: 'Submit Assessments',
//       description:
//         'Engage in lectures, attend live sessions, and join project-based learning to meet courses requirements.',
//     },
//     {
//       number: 4,
//       title: 'Achieve Certification Criteria',
//       description:
//         'Engage in lectures, attend live sessions, and join project-based learning to meet courses requirements.',
//     },
//     {
//       number: 5,
//       title: 'Receive Your Certificate',
//       description:
//         'Engage in lectures, attend live sessions, and join project-based learning to meet courses requirements.',
//     },
//   ]

//   return (
//     <div className="relative flex gap-16 py-16">
//       <div className="flex flex-col w-[600px]">
//         <img src={image} alt="Certificate Image" />
//         <div className="flex pt-4">
//           <span className="text-[24px] font-Montserrat font-bold text-black dark:text-white">
//             Earn your certificate in just {steps.length} steps
//           </span>
//         </div>
//         <div className="py-6 flex flex-col gap-8">
//           {steps.map((step, index) => (
//             <Step key={index} index={index} {...step} />
//           ))}
//         </div>
//       </div>
//       <div className="flex flex-col w-[650px] gap-10 relative">
//         <div className="justify-centerw-[523px] h-[500px] bg-white rounded-xl"></div>
//         <span className="text-[16px] text-black dark:text-white font-Roboto">
//           Download your certificate instantly upon course completion—an emblem
//           of your accomplished learning journey awaits you.
//         </span>
//         <Progressbutton
//           progressText=""
//           completeText="Download your certificate"
//         />
//         <span className="text-black dark:text-[white] text-[36px] p-0">
//           Frequently Asked Questions
//         </span>
//         <FAQs
//           faqs={FAQ.faqs}
//           faqButtonProps={{
//             className: '!bg-background !border-neutral-95',
//           }}
//         />
//       </div>
//     </div>
//   )
// }

// interface StepProps {
//   index: number
//   number: number
//   title: string
//   description: string
// }

// const Step: React.FC<StepProps> = ({ index, number, title, description }) => {
//   const stepImages = [image, number1, number2, number3, number4, number5]
//   const topPosition = index === 0 ? 'top-0' : 'top-[-76px]'
//   return (
//     <div className="relative border  dark:border-[#FFFFFF8A]  p-2 rounded-xl">
//       <img
//         src={stepImages[number]}
//         className={`absolute left-[380px] ${topPosition}`}
//         alt={`Step ${number}`}
//       />
//       <div className="p-2 font-Roboto flex flex-col gap-4">
//         <span className="text-[24px] text-black dark:text-white">{title}</span>
//         <p className="text-[16px] text-black dark:text-[#FFFFFF8A]">
//           {description}
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Index
