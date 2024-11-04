import React from 'react'

interface CertificatePreviewProps {
  userName?: string
  courseName?: string
  completionDate?: string
  isCompleted?: boolean
}

const CertificatePreview: React.FC<CertificatePreviewProps> = ({
  userName = '',
  courseName = '',
  completionDate = '',
  isCompleted = false,
}) => {
  if (!isCompleted) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-neutral-600 dark:text-neutral-300">
        <p className="text-lg font-medium mb-2">Certificate Preview</p>
        <p className="text-sm">
          Complete the course to unlock your certificate
        </p>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full bg-white dark:bg-neutral-900 p-8 rounded-lg border-8 border-double border-primary/20">
      <div className="absolute top-4 right-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <div className="w-12 h-12 bg-primary/20 rounded-full" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-full space-y-6 text-center">
        <div className="space-y-2">
          <h2 className="text-2xl font-serif text-primary">
            Certificate of Completion
          </h2>
          <div className="w-32 h-1 mx-auto bg-primary/30 rounded" />
        </div>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          This certifies that
        </p>

        <p className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
          {userName}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          has successfully completed the course
        </p>

        <p className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
          {courseName}
        </p>

        <div className="pt-6">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Completed on {completionDate}
          </p>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="w-32 h-[2px] bg-neutral-800/30 dark:bg-neutral-200/30" />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-primary/30" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-primary/30" />
    </div>
  )
}

export default CertificatePreview
