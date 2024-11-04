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
//           onClose={() => setShowCertificate(false)}
//           userName={userName}
//           courseName={courseName}
//           completionDate={completionDate}
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

import React from 'react'
import { Award, CheckCircle } from 'lucide-react'

interface CertificateProps {
  userName: string
  courseName: string
  completionDate: string
  logoUrl?: string
  certificateId?: string
}

const Certificate: React.FC<CertificateProps> = ({
  userName,
  courseName,
  completionDate,
  logoUrl,
  certificateId = 'ABC123',
}) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Background with gradient */}
      <div className="bg-gradient-to-br from-white to-blue-50 p-16 border-8 border-double border-blue-600 rounded-lg shadow-2xl">
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-gold-500 rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-gold-500 rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-gold-500 rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-gold-500 rounded-br-lg" />

        {/* Header with logo */}
        <div className="flex justify-between items-center mb-8">
          {logoUrl ? (
            <img src={logoUrl} alt="Logo" className="h-20 w-20" />
          ) : (
            <Award className="h-20 w-20 text-blue-600" />
          )}
          <div className="text-right">
            <p className="text-sm text-gray-600">
              Certificate ID: {certificateId}
            </p>
            <p className="text-sm text-gray-600">{new Date().getFullYear()}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-6">
          {/* Title with decorative elements */}
          <div className="relative">
            <h1 className="text-5xl font-serif font-bold text-blue-800 mb-2">
              Certificate of Excellence
            </h1>
            <div className="flex justify-center items-center gap-4 text-blue-600">
              <div className="h-px w-24 bg-blue-300" />
              <CheckCircle className="h-6 w-6" />
              <div className="h-px w-24 bg-blue-300" />
            </div>
          </div>

          {/* Certificate Body */}
          <div className="my-12 space-y-6">
            <p className="text-lg text-gray-600 italic">
              This is to certify that
            </p>
            <h2 className="text-4xl font-serif font-bold text-blue-700 py-4 px-8 inline-block border-b-2 border-blue-200">
              {userName}
            </h2>
            <p className="text-lg text-gray-600">
              has successfully completed the course
            </p>
            <h3 className="text-3xl font-semibold text-blue-600 my-4 px-8">
              {courseName}
            </h3>
            <p className="text-lg text-gray-600">Awarded on {completionDate}</p>
          </div>

          {/* Signatures Section */}
          <div className="flex justify-center gap-24 mt-16">
            <div className="text-center">
              <div className="w-48 border-t-2 border-blue-400 pt-2">
                <p className="font-serif font-semibold text-gray-700">
                  Course Director
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-48 border-t-2 border-blue-400 pt-2">
                <p className="font-serif font-semibold text-gray-700">
                  Academic Dean
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative seal */}
        <div className="absolute -bottom-12 right-12 h-24 w-24 rounded-full bg-blue-600 bg-opacity-10 flex items-center justify-center border-2 border-blue-300 rotate-12">
          <div className="h-20 w-20 rounded-full border-2 border-blue-400 flex items-center justify-center">
            <Award className="h-12 w-12 text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificate

// import React from 'react';
// import { Award, Shield, Star, Trophy, Medal, CheckCircle, BookOpen } from 'lucide-react';

// interface CertificateProps {
//   userName: string;
//   courseName: string;
//   completionDate: string;
//   logoUrl?: string;
//   certificateId?: string;
//   grade?: string;
//   instructorName?: string;
// }

// // Modern Minimalist Certificate
// const MinimalistCertificate: React.FC<CertificateProps> = ({
//   userName,
//   courseName,
//   completionDate,
//   logoUrl,
//   certificateId = "MIN-2024-001"
// }) => {
//   return (
//     <div className="w-full max-w-4xl mx-auto bg-white p-16 rounded-lg shadow-xl">
//       <div className="border border-gray-200 p-12 relative">
//         {/* Minimal geometric patterns */}
//         <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-gray-800" />
//         <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-gray-800" />

//         {/* Header */}
//         <div className="text-center mb-12">
//           {logoUrl ? (
//             <img src={logoUrl} alt="Logo" className="h-16 w-16 mx-auto mb-6" />
//           ) : (
//             <Shield className="h-16 w-16 mx-auto mb-6 text-gray-800" />
//           )}
//           <h1 className="text-4xl font-light tracking-wide text-gray-800">CERTIFICATE</h1>
//         </div>

//         {/* Content */}
//         <div className="text-center space-y-8">
//           <p className="text-lg text-gray-600">This certifies that</p>
//           <h2 className="text-3xl font-bold text-gray-800">{userName}</h2>
//           <p className="text-lg text-gray-600">has successfully completed</p>
//           <h3 className="text-2xl font-semibold text-gray-800">{courseName}</h3>
//           <p className="text-lg text-gray-600">On {completionDate}</p>
//         </div>

//         {/* Footer */}
//         <div className="mt-16 flex justify-between items-end">
//           <p className="text-sm text-gray-500">ID: {certificateId}</p>
//           <div className="w-48 border-t border-gray-400">
//             <p className="text-center mt-2 text-gray-600">Director</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Luxury Gold Certificate
// // const LuxuryCertificate: React.FC<CertificateProps> = ({
// //   userName,
// //   courseName,
// //   completionDate,
// //   logoUrl,
// //   certificateId = "LUX-2024-001",
// //   grade,
// //   instructorName
// // }) => {
// //   return (
// //     <div className="w-full max-w-4xl mx-auto">
// //       <div className="bg-gradient-to-br from-yellow-50 to-white p-16 border-8 border-double border-yellow-600 rounded-lg shadow-2xl relative">
// //         {/* Ornamental corners */}
// //         <div className="absolute top-0 left-0 w-32 h-32">
// //           <div className="absolute top-4 left-4 w-full h-full border-t-4 border-l-4 border-yellow-400 rounded-tl-lg" />
// //           <div className="absolute top-0 left-0 w-full h-full border-t-4 border-l-4 border-yellow-600 rounded-tl-lg" />
// //         </div>
// //         <div className="absolute top-0 right-0 w-32 h-32 transform rotate-90">
// //           <div className="absolute top-4 left-4 w-full h-full border-t-4 border-l-4 border-yellow-400 rounded-tl-lg" />
// //           <div className="absolute top-0 left-0 w-full h-full border-t-4 border-l-4 border-yellow-600 rounded-tl-lg" />
// //         </div>
// //         <div className="absolute bottom-0 left-0 w-32 h-32 transform -rotate-90">
// //           <div className="absolute top-4 left-4 w-full h-full border-t-4 border-l-4 border-yellow-400 rounded-tl-lg" />
// //           <div className="absolute top-0 left-0 w-full h-full border-t-4 border-l-4 border-yellow-600 rounded-tl-lg" />
// //         </div>
// //         <div className="absolute bottom-0 right-0 w-32 h-32 transform rotate-180">
// //           <div className="absolute top-4 left-4 w-full h-full border-t-4 border-l-4 border-yellow-400 rounded-tl-lg" />
// //           <div className="absolute top-0 left-0 w-full h-full border-t-4 border-l-4 border-yellow-600 rounded-tl-lg" />
// //         </div>

// //         {/* Content */}
// //         <div className="text-center space-y-6 relative">
// //           {/* Header */}
// //           <div className="mb-12">
// //             {logoUrl ? (
// //               <img src={logoUrl} alt="Logo" className="h-24 w-24 mx-auto mb-6" />
// //             ) : (
// //               <Trophy className="h-24 w-24 mx-auto mb-6 text-yellow-600" />
// //             )}
// //             <h1 className="text-5xl font-serif font-bold text-yellow-800">
// //               Certificate of Excellence
// //             </h1>
// //             <div className="flex justify-center items-center gap-4 mt-4">
// //               <div className="h-px w-32 bg-yellow-600" />
// //               <Star className="h-6 w-6 text-yellow-600" />
// //               <div className="h-px w-32 bg-yellow-600" />
// //             </div>
// //           </div>

// //           {/* Main Content */}
// //           <div className="space-y-8">
// //             <p className="text-xl text-yellow-800 italic">With honors, this certifies that</p>
// //             <h2 className="text-4xl font-serif font-bold text-yellow-900 py-4">{userName}</h2>
// //             {grade && (
// //               <p className="text-xl text-yellow-700">Grade Achieved: {grade}</p>
// //             )}
// //             <p className="text-xl text-yellow-800">has successfully completed the course</p>
// //             <h3 className="text-3xl font-serif font-semibold text-yellow-900">
// //               {courseName}
// //             </h3>
// //             <p className="text-xl text-yellow-800">
// //               Awarded on {completionDate}
// //             </p>
// //           </div>

// //           {/* Signatures */}
// //           <div className="flex justify-around mt-16">
// //             <div className="text-center">
// //               <div className="w-64 border-t-2 border-yellow-600 pt-2">
// //                 <p className="font-serif text-yellow-800">{instructorName || 'Course Instructor'}</p>
// //               </div>
// //             </div>
// //             <div className="text-center">
// //               <div className="w-64 border-t-2 border-yellow-600 pt-2">
// //                 <p className="font-serif text-yellow-800">Institution Director</p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Certificate ID */}
// //           <div className="absolute bottom-0 left-0 text-yellow-700">
// //             <p className="text-sm">Certificate ID: {certificateId}</p>
// //           </div>
// //         </div>

// //         {/* Decorative Seal */}
// //         <div className="absolute -bottom-8 right-8">
// //           <div className="relative w-32 h-32">
// //             <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-full border-4 border-yellow-600 flex items-center justify-center transform rotate-12">
// //               <Medal className="h-16 w-16 text-yellow-600" />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Modern Tech Certificate
// // const TechCertificate: React.FC<CertificateProps> = ({
// //   userName,
// //   courseName,
// //   completionDate,
// //   logoUrl,
// //   certificateId = "TECH-2024-001"
// // }) => {
// //   return (
// //     <div className="w-full max-w-4xl mx-auto">
// //       <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 p-16 rounded-xl shadow-2xl relative overflow-hidden">
// //         {/* Background Pattern */}
// //         <div className="absolute inset-0 opacity-5">
// //           <div className="absolute top-0 left-0 w-full h-full grid grid-cols-8 gap-4">
// //             {Array.from({ length: 64 }).map((_, i) => (
// //               <div key={i} className="w-full h-8 bg-gray-800 transform -skew-x-12" />
// //             ))}
// //           </div>
// //         </div>

// //         {/* Content Container */}
// //         <div className="relative">
// //           {/* Header */}
// //           <div className="flex justify-between items-start mb-12">
// //             <div>
// //               {logoUrl ? (
// //                 <img src={logoUrl} alt="Logo" className="h-16 w-16" />
// //               ) : (
// //                 <BookOpen className="h-16 w-16 text-purple-600" />
// //               )}
// //             </div>
// //             <div className="text-right">
// //               <p className="text-sm text-gray-600">ID: {certificateId}</p>
// //               <p className="text-sm text-gray-600">{completionDate}</p>
// //             </div>
// //           </div>

// //           {/* Title */}
// //           <div className="text-center mb-12">
// //             <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
// //               CERTIFICATION
// //             </h1>
// //             <div className="flex justify-center items-center gap-2 mt-4">
// //               <div className="h-px w-16 bg-gradient-to-r from-purple-400 to-blue-400" />
// //               <CheckCircle className="h-5 w-5 text-purple-600" />
// //               <div className="h-px w-16 bg-gradient-to-r from-blue-400 to-purple-400" />
// //             </div>
// //           </div>

// //           {/* Main Content */}
// //           <div className="text-center space-y-6">
// //             <p className="text-lg text-gray-600">This is to certify that</p>
// //             <h2 className="text-4xl font-bold text-gray-800 py-4">{userName}</h2>
// //             <p className="text-lg text-gray-600">has successfully completed</p>
// //             <h3 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
// //               {courseName}
// //             </h3>
// //           </div>

// //           {/* Footer */}
// //           <div className="mt-16 flex justify-between items-end">
// //             <div className="text-center flex-1">
// //               <div className="w-48 mx-auto border-t-2 border-purple-400 pt-2">
// //                 <p className="text-gray-700">Lead Instructor</p>
// //               </div>
// //             </div>
// //             <div className="text-center flex-1">
// //               <div className="w-48 mx-auto border-t-2 border-blue-400 pt-2">
// //                 <p className="text-gray-700">Program Director</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // Export all certificate types
// const Certificates = {
//   Minimalist: MinimalistCertificate,
//   // Luxury: LuxuryCertificate,
//   // Tech: TechCertificate
// };

// export default Certificates;

// import React from 'react';

// interface CertificateProps {
//   userName: string;
//   courseName: string;
//   completionDate: string;
//   logoUrl?: string; // Optional prop for a logo
// }

// const Certificate: React.FC<CertificateProps> = ({ userName, courseName, completionDate, logoUrl }) => {
//   return (
//     <div className="bg-white p-10 border-8 border-blue-500 rounded-lg shadow-xl max-w-4xl mx-auto text-center relative">
//       {/* Certificate Logo */}
//       {logoUrl && (
//         <div className="absolute top-8 left-8">
//           <img src={logoUrl} alt="Logo" className="h-16 w-16" />
//         </div>
//       )}

//       {/* Certificate Title */}
//       <h1 className="text-5xl font-extrabold text-blue-800 mb-4">Certificate of Completion</h1>

//       {/* Certificate Description */}
//       <p className="text-lg mb-8 italic">This is to certify that</p>

//       {/* User Name */}
//       <p className="text-4xl font-bold text-blue-600 mb-8">{userName}</p>

//       {/* Course Completion Details */}
//       <p className="text-lg mb-8">has successfully completed the course</p>
//       <p className="text-3xl font-semibold text-blue-600 mb-8">"{courseName}"</p>

//       {/* Completion Date */}
//       <p className="text-lg mb-8">on {completionDate}</p>

//       {/* Divider */}
//       <div className="mt-16">
//         <div className="w-72 mx-auto border-t-2 border-blue-500 pt-4">
//           <p className="font-bold">Instructor Signature</p>
//         </div>
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute bottom-8 left-8 text-gray-600">
//         <p className="text-sm">Course Certification No: ABC123</p>
//       </div>
//       <div className="absolute bottom-8 right-8 text-gray-600">
//         <p className="text-sm">© 2024 Your Company</p>
//       </div>
//     </div>
//   );
// };

// export default Certificate;
