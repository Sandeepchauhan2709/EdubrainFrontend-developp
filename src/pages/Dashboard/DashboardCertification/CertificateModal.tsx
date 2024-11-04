// import React from 'react';
// import html2canvas from 'html2canvas';

// interface CertificateModalProps {
//   onClose: () => void;
//   userName: string;
//   courseName: string;
//   completionDate: string;
//   certificateId: string;
// }

// const CertificateModal: React.FC<CertificateModalProps> = ({
//   onClose,
//   userName,
//   courseName,
//   completionDate,
//   certificateId
// }): JSX.Element => {
//   const handleDownload = async (): Promise<void> => {
//     const certificateElement = document.getElementById('certificate');
//     if (certificateElement) {
//       try {
//         const canvas = await html2canvas(certificateElement, {
//           scale: 2,
//           useCORS: true,
//           logging: false,
//         });

//         const link = document.createElement('a');
//         link.download = `${userName}-${courseName}-Certificate.png`;
//         link.href = canvas.toDataURL('image/png');
//         link.click();
//       } catch (error) {
//         console.error('Error generating certificate:', error);
//       }
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-8 rounded-lg max-w-3xl w-full">
//         <div id="certificate" className="p-8 border-8 border-blue-200">
//           <div className="text-center space-y-6">
//             <h2 className="text-3xl font-bold text-blue-900">Certificate of Completion</h2>
//             <p className="text-lg">This is to certify that</p>
//             <p className="text-2xl font-bold text-blue-800">{userName}</p>
//             <p className="text-lg">has successfully completed the course</p>
//             <p className="text-2xl font-bold text-blue-800">{courseName}</p>
//             <p className="text-lg">on {new Date(completionDate).toLocaleDateString()}</p>
//             <p className="text-sm text-gray-500">Certificate ID: {certificateId}</p>
//           </div>
//         </div>
//         <div className="mt-6 flex justify-end space-x-4">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
//           >
//             Close
//           </button>
//           <button
//             onClick={(): Promise<void> => handleDownload()}
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             Download Certificate
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CertificateModal;

import React from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Certificate from './Certificate'

interface CertificateModalProps {
  onClose: () => void
  userName: string
  courseName: string
  completionDate: string
  logoUrl: string
}

const CertificateModal: React.FC<CertificateModalProps> = ({
  onClose,
  userName,
  courseName,
  completionDate,
  logoUrl,
}) => {
  const handleDownload = (): void => {
    const certificateElement = document.getElementById('certificate')
    if (certificateElement) {
      html2canvas(certificateElement).then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        // eslint-disable-next-line new-cap
        const pdf = new jsPDF('l', 'mm', 'a4')
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = pdf.internal.pageSize.getHeight()
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
        pdf.save('certificate.pdf')
      })
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-auto">
      <div className="bg-white p-8 rounded-xl max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-4">
          Course Completion Certificate
        </h2>
        <div id="certificate">
          <Certificate
            userName={userName}
            courseName={courseName}
            completionDate={completionDate}
            logoUrl={
              'http://localhost:3000/static/media/logo.bc4f089b129b04580c65.png'
            }
          />
        </div>
        <div className="flex justify-end space-x-4 mt-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded-md"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={handleDownload}
          >
            Download Certificate
          </button>
        </div>
      </div>
    </div>
  )
}

export default CertificateModal
