import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import type { JSX } from 'react'

import arrowUp from '../../assets/icons/arrow-up.svg'
import linkIcon from '../../assets/icons/link-2.svg'
import docIcon from '../../assets/icons/document-text.svg'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import VIDEO_DATA from '../../assets/mockData/video'
import CoursePart from './CoursePart'
import FAQSection from './FAQSection'
import DashboardHeader from '../Dashboard/DashboardHeader/DashboardHeader'
import VideoPlayer from './VideoPlayer'
import type { VideoPlayerHandle } from './VideoPlayer'
import API from '../../api'
import { handleGetUser } from '../../api/user'

interface Lecture {
  _id: string
  lecture_no: number
  lecture_name: string
  lecture_cloud_link: {
    domain_url: string
    bucket: string
    folder_name: string
    file_name: string
  }
  lecture_file_path: string
}

interface Section {
  _id: string
  section_no: number
  section_name: string
  section_lectures: Lecture[]
}

interface Course {
  _id: string
  course_name: string
  sections: Section[]
}

const VideoSection = (): JSX.Element => {
  const { slug } = useParams<{ slug: string }>()
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const videoPlayerRef = useRef<VideoPlayerHandle>(null)
  const [videoUrl, setVideoUrl] = useState(
    'https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/MPaEbz-/videoblocks-3d-motion-graphics-background-with-digitally-animated-financial-line-graphs-running-through-virtual-space-with-holographic-rates-and-stock-market-board_rrmqee0uen__a7e7f8b956edb39721046e83c001f47a__P360.mp4'
  )
  const [courseProgress, setCourseProgress] = useState<number>(0)
  const [videoProgress, setVideoProgress] = useState<number>(0)
  const [currentLectureNumber, setCurrentLectureNumber] = useState<number>(0)
  const [refresh, setRefresh] = useState<boolean>(false)
  const [totalNumber, setTotalNumber] = useState<number>(0)
  const [hasPrevLecture, setHasPrevLecture] = useState<boolean>(false)
  const [hasNextLecture, setHasNextLecture] = useState<boolean>(false)
  const [lectureName, setLectureName] = useState<string>('')
  const [completedLectures, setCompletedLectures] = useState<number[]>([])
  const { data: userData } = useQuery({
    queryKey: ['user'],
    queryFn: handleGetUser,
    retry: 0,
  })

  const user: any = userData
  const userId: string = user?._id || ''

  const findNextLecture = useCallback((): {
    url: string
    lectureNumber: number
    lectureName: string
  } | null => {
    let foundCurrent = false
    for (const course of courses) {
      for (const section of course.sections) {
        for (const lecture of section.section_lectures) {
          if (lecture.lecture_no === currentLectureNumber + 1) {
            foundCurrent = true
          }
          if (foundCurrent) {
            const { domain_url, bucket, folder_name, file_name } =
              lecture.lecture_cloud_link
            return {
              url: `${domain_url}${bucket}/${folder_name}/${file_name}.mp4`,
              lectureNumber: lecture.lecture_no,
              lectureName: lecture.lecture_name,
            }
          }
        }
      }
    }
    return null
  }, [courses, currentLectureNumber])

  const findPrevLecture = useCallback((): {
    url: string
    lectureNumber: number
    lectureName: string
  } | null => {
    let prevLecture = null
    for (const course of courses) {
      for (const section of course.sections) {
        for (const lecture of section.section_lectures) {
          if (lecture.lecture_no === currentLectureNumber) {
            return prevLecture
          }
          const { domain_url, bucket, folder_name, file_name } =
            lecture.lecture_cloud_link
          prevLecture = {
            url: `${domain_url}${bucket}/${folder_name}/${file_name}.mp4`,
            lectureNumber: lecture.lecture_no,
            lectureName: lecture.lecture_name,
          }
        }
      }
    }
    return null
  }, [courses, currentLectureNumber])

  const handleVideoChange = useCallback(
    (
      newUrl: string,
      lectureNumber: number,
      newLectureName: string,
      autoplay: boolean = true
    ): void => {
      console.log('Changing video URL to:', newUrl)
      setVideoUrl(newUrl)
      setCurrentLectureNumber(lectureNumber)
      setLectureName(newLectureName)
      if (videoPlayerRef.current) {
        videoPlayerRef.current.loadVideo(newUrl, autoplay)
      }
    },
    []
  )

  const nextVideo = useCallback((): void => {
    const nextLecture = findNextLecture()
    if (nextLecture) {
      handleVideoChange(
        nextLecture.url,
        nextLecture.lectureNumber,
        nextLecture.lectureName
      )
    }
  }, [findNextLecture, handleVideoChange])

  const prevVideo = useCallback((): void => {
    const prevLecture = findPrevLecture()
    if (prevLecture) {
      handleVideoChange(
        prevLecture.url,
        prevLecture.lectureNumber,
        prevLecture.lectureName
      )
    }
  }, [findPrevLecture, handleVideoChange])

  const saveCourseProgress = useCallback(
    async (progress: number): Promise<void> => {
      try {
        const courseId = courses[0]?._id
        const lectureNumber = currentLectureNumber
        const response = await fetch(API.savepartialProgress, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId, courseId, lectureNumber, progress }),
        })

        if (!response.ok) {
          throw new Error('Failed to save course progress')
        }

        const data = await response.json()
        console.log('Progress saved successfully:', data)
      } catch (error) {
        console.error('Error saving progress:', error)
      }
    },
    [courses, currentLectureNumber, userId]
  )

  const handleVideoEnd = useCallback(async (): Promise<void> => {
    console.log('Video ended, saving progress...')
    await saveCourseProgress(100)
    setRefresh((prev) => !prev)

    const nextLecture = findNextLecture()
    if (nextLecture) {
      handleVideoChange(
        nextLecture.url,
        nextLecture.lectureNumber,
        nextLecture.lectureName
      )
    }
  }, [saveCourseProgress, findNextLecture, handleVideoChange])

  const handleVideoEndWrapper = useCallback((): void => {
    handleVideoEnd().catch((error) => {
      console.error('Error handling video end:', error)
    })
  }, [handleVideoEnd])

  const handleProgressUpdate = useCallback((progress: number): void => {
    setVideoProgress(progress)
  }, [])

  useEffect(() => {
    const fetchCourses = async (): Promise<void> => {
      try {
        const response = await fetch(API.coursedatabyslug(slug))
        if (!response.ok) {
          throw new Error('Failed to fetch courses')
        }

        const data = await response.json()
        console.log(data)
        setCourses(Array.isArray(data) ? data : [data])
      } catch (error) {
        console.error('Error fetching courses:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchCourses()
  }, [slug])

  useEffect(() => {
    const fetchCourseProgress = async (): Promise<void> => {
      if (!courses || courses.length === 0) {
        console.log('Courses not yet available')
        return
      }

      try {
        const courseId = courses[0]?._id
        const response = await fetch(
          `${API.courseprogress}${userId}/${courseId}`
        )
        if (!response.ok) {
          throw new Error('Failed to fetch course progress')
        }

        const progressData = await response.json()
        const totalno: number = progressData.totalLectures
        setTotalNumber(totalno)
        const progressCurrent: number = progressData.overallProgress
        setCourseProgress(progressCurrent)
        const completed: number[] = progressData.completedLectureArray
        setCompletedLectures(completed)
      } catch (error) {
        console.error('Error fetching course progress:', error)
      }
    }

    if (courses.length > 0) {
      fetchCourseProgress()
    }
  }, [courses, refresh, userId])

  useEffect(() => {
    const updateNavigationState = (): void => {
      const prevLecture = findPrevLecture()
      const nextLecture = findNextLecture()
      setHasPrevLecture(!!prevLecture)
      setHasNextLecture(!!nextLecture)
    }

    updateNavigationState()
  }, [currentLectureNumber, courses, findPrevLecture, findNextLecture])

  const findLectureByNumber = useCallback(
    (
      lectureNumber: number
    ): {
      url: string
      lectureNumber: number
      lectureName: string
    } | null => {
      for (const course of courses) {
        for (const section of course.sections) {
          for (const lecture of section.section_lectures) {
            if (lecture.lecture_no === lectureNumber) {
              const { domain_url, bucket, folder_name, file_name } =
                lecture.lecture_cloud_link
              return {
                url: `${domain_url}${bucket}/${folder_name}/${file_name}.mp4`,
                lectureNumber: lecture.lecture_no,
                lectureName: lecture.lecture_name,
              }
            }
          }
        }
      }
      return null
    },
    [courses]
  )

  const updateLastLecture = useCallback(
    async (lectureNumber: number): Promise<void> => {
      try {
        const courseId = courses[0]?._id
        const response = await fetch(`${API.lastLecture}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId,
            courseId,
            lastLecture: lectureNumber,
          }),
        })

        if (!response.ok) {
          throw new Error('Failed to update last lecture')
        }

        const data = await response.json()
        console.log('Last lecture updated successfully:', data)
      } catch (error) {
        console.error('Error updating last lecture:', error)
      }
    },
    [courses, userId]
  )

  useEffect(() => {
    const fetchLastLecture = async (): Promise<void> => {
      if (!courses || courses.length === 0) {
        console.log('Courses not yet available')
        return
      }

      try {
        const courseId = courses[0]?._id
        const response = await fetch(
          `${API.courseprogress}${userId}/${courseId}`
        )
        if (!response.ok) {
          throw new Error('Failed to fetch course progress')
        }

        const progressData = await response.json()
        const lastLecture: number = progressData.lastLectureAccessed

        if (lastLecture > 0) {
          const lecture = findLectureByNumber(lastLecture)
          if (lecture) {
            handleVideoChange(
              lecture.url,
              lecture.lectureNumber,
              lecture.lectureName,
              false
            ) // Disable autoplay for initial load
          }
        }
      } catch (error) {
        console.error('Error fetching last lecture:', error)
      }
    }

    fetchLastLecture()
  }, [courses, userId, findLectureByNumber, handleVideoChange])

  useEffect(() => {
    if (currentLectureNumber > 0) {
      updateLastLecture(currentLectureNumber)
    }
  }, [currentLectureNumber, updateLastLecture])

  if (loading) {
    return <div>Loading courses...</div>
  }

  return (
    <div className="dark:bg-background bg-background-light padding-x py-12 w-full h-full">
      <DashboardHeader from="videoSection" />
      <main className="flex gap-6 flex-col lg:flex-row mt-8">
        <div className="flex-grow flex gap-6 flex-col">
          <div className="flex flex-col gap-3">
            <span className="body-text-md text-foreground-light dark:text-neutral-10">
              Lesson {currentLectureNumber} of {totalNumber}
            </span>
            <div className="flex justify-between items-center">
              <h2 className="h2 text-foreground-light dark:text-neutral-10">
                {lectureName}
              </h2>
              <div className="flex gap-5">
                <button
                  onClick={prevVideo}
                  disabled={!hasPrevLecture}
                  className={
                    !hasPrevLecture ? 'opacity-50 cursor-not-allowed' : ''
                  }
                >
                  <img
                    src={arrowUp}
                    alt="Previous lecture"
                    className="-rotate-90"
                  />
                </button>
                <button
                  onClick={nextVideo}
                  disabled={!hasNextLecture}
                  className={
                    !hasNextLecture ? 'opacity-50 cursor-not-allowed' : ''
                  }
                >
                  <img src={arrowUp} alt="Next lecture" className="rotate-90" />
                </button>
              </div>
            </div>
          </div>
          <VideoPlayer
            ref={videoPlayerRef}
            initialUrl={videoUrl}
            onEnded={handleVideoEndWrapper}
            onProgressUpdate={handleProgressUpdate}
          />

          <div className="flex flex-col gap-4 mt-2">
            <h4 className="sub-heading text-foreground-light dark:text-neutral-10">
              Summary
            </h4>
            <p className="body-text-md text-neutral-60 dark:text-neutral-40">
              {VIDEO_DATA.summary}
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-2">
            <h4 className="sub-heading text-foreground-light dark:text-neutral-10">
              Resources
            </h4>
            <div className="flex flex-col gap-3">
              {VIDEO_DATA.resources.map((resource, index) => (
                <Link
                  to={resource.link}
                  key={`resource-${index}`}
                  target="_blank"
                  className="w-full bg-foreground-light/10 dark:bg-neutral-95 rounded-xl p-3 flex gap-4 text-foreground-light dark:text-neutral-10"
                >
                  <img
                    src={linkIcon}
                    alt="link icon"
                    className="invert dark:invert-0"
                  />
                  <span>{resource.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-2">
            <h4 className="sub-heading text-foreground-light dark:text-neutral-10">
              Assignment
            </h4>
            <div className="flex flex-col gap-3">
              {VIDEO_DATA.assignments.map((assignment, index) => (
                <div
                  key={`assignment-${index}`}
                  className="w-full bg-foreground-light/10 dark:bg-neutral-95 h-[54px] rounded-xl px-3 py-2 flex gap-4 justify-between text-foreground-light dark:text-neutral-10"
                >
                  <span className="flex gap-4 items-center ">
                    <img
                      src={docIcon}
                      alt="link icon"
                      className="invert dark:invert-0"
                    />
                    <span className="min-w-max">{assignment.name}</span>
                  </span>
                  <Link
                    to={assignment.link}
                    target="_blank"
                    className="h-full rounded-lg bg-neutral-15 dark:bg-neutral-90 text-[16px] flex items-center justify-center px-7 py-2"
                  >
                    Add
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <FAQSection faqs={VIDEO_DATA.faq} />
          <PrimaryButton
            style={{
              maxWidth: 'max-content',
            }}
          >
            Move to next?
          </PrimaryButton>
        </div>
        {/* right side content  */}
        <div className="w-full lg:min-w-[420px] lg:max-w-[600px] flex flex-col items-center gap-[20px] mt-12">
          <div className="flex justify-between items-center border border-foreground-light border-opacity-20 dark:opacity-100 dark:border-neutral-90 rounded-[20px] py-5 w-full px-10 h-[162px]">
            {/* <h2 className="h2 text-foreground-light dark:text-neutral-10">
              Course <br /> Progress
            </h2> */}
            <h2 className="h2 text-foreground-light dark:text-neutral-10">
              {courses[0]?.course_name} <br /> Progress
            </h2>

            <div
              className="h-[120px] w-[120px] aspect-square rounded-full bg-white dark:bg-background flex items-center justify-center relative dark:"
              style={{
                filter: 'drop-shadow(0px 0px 91.6px rgba(36, 107, 253, 0.16))',
              }}
            >
              <span className="h3 text-foreground-light dark:text-neutral-10 ">
                {courseProgress}%
              </span>
              <div className="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90">
                <svg className="" width="120" height="120">
                  <circle
                    className="stroke-white dark:stroke-background"
                    strokeWidth="4"
                    fill="transparent"
                    r="56"
                    cx="60"
                    cy="60"
                  />
                  <circle
                    className="dark:stroke-primary-30 stroke-primary-50"
                    strokeWidth="8"
                    fill="transparent"
                    r="56"
                    cx="60"
                    cy="60"
                    strokeDasharray={Math.PI * 2 * 56}
                    strokeDashoffset={`${(1 - courseProgress / 100) * 2 * Math.PI * 56}`}
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full">
            {courses.map((course, index) => (
              <CoursePart
                key={course._id}
                handleVideoChange={handleVideoChange}
                i={index}
                progress={videoProgress.toString()}
                course_name={course.course_name}
                sections={course.sections}
                currentLectureNumber={currentLectureNumber}
                completedLectures={completedLectures}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
export default VideoSection
