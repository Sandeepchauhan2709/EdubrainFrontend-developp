import type { JSX } from 'react'
import arrowUp from '../../assets/icons/arrow-up.svg'

import linkIcon from '../../assets/icons/link-2.svg'
import docIcon from '../../assets/icons/document-text.svg'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import VIDEO_DATA from '../../assets/mockData/video'

import { Link, useParams } from 'react-router-dom'
import CoursePart from './CoursePart'
import FAQSection from './FAQSection'
import DashboardHeader from '../Dashboard/DashboardHeader/DashboardHeader'
import VideoPlayer from './VideoPlayer'
import type { VideoPlayerHandle } from './VideoPlayer';

import { useState,useRef,useEffect } from 'react'

import API from '../../api'


interface Section {
  title: string;
  section_name: string;
  domain_url: string;
  section_lectures: Array<{
    name: string;
    time: string;
    isActive: boolean;
    lecture_name: string;
    videoUrl: string;
    file_name: string;
    domain_url: string;
  }>;
}

interface Course {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  domain_url: string;
  progress?: number;
  sections?: Section[]; 
  course_name?: string;
  lecture_name: string;
  section_name: string;
}

interface CourseProgress {
  progress: number;
};

// interface VideoPlayerProps {
//   initialUrl: string;
//   onEnded?: () => void; 
// }


const VideoSection = (): JSX.Element => {
  const {slug} = useParams();
  const [courses, setCourses] = useState<Course[]>([]);
  // const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const videoPlayerRef = useRef<VideoPlayerHandle>(null);
  const [videoUrl, setVideoUrl] = useState('https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/MPaEbz-/videoblocks-3d-motion-graphics-background-with-digitally-animated-financial-line-graphs-running-through-virtual-space-with-holographic-rates-and-stock-market-board_rrmqee0uen__a7e7f8b956edb39721046e83c001f47a__P360.mp4');
  const [courseProgress, setCourseProgress] = useState<number>(0);

    useEffect(() => {
      const fetchCourses = async (): Promise<void> => {
        try {
          // const response = await fetch(`${API.coursedata}/${slug}`);
          const response = await fetch(API.coursedata);
          if (!response.ok) {
            throw new Error('Failed to fetch courses');
          }

          const data = await response.json();
          
          console.log(data); 
            if (data && typeof data === 'object' && !Array.isArray(data)) {
            setCourses([data]); // Wrap the single object in an array
          } else if (Array.isArray(data)) {
            setCourses(data); // If data is already an array, set it directly
          } else {
            setCourses([]); // If data is neither object nor array, set an empty array
            console.error('Unexpected data format:', data);
          }

        // Fetch the course progress
        const progressResponse = await fetch(`${API.courseprogress}/${slug}`);
        // const progressResponse = await fetch(API.courseprogress);
        if (!progressResponse.ok) {
          throw new Error('Failed to fetch course progress');
        }
        const progressData: CourseProgress = await progressResponse.json();

        if(typeof progressData.progress === 'number') {
          setCourseProgress(progressData.progress);
        }
        else {
          console.log('Invalid progress data:', progressData)
        }

      } catch (error) {
        console.error('Error fetching  progress:', error);
      } finally {
        setLoading(false);
      }
    };
      fetchCourses();
    }, [slug]);
    

    if (loading) {
      return <div>Loading courses...</div>;
  }

  // if (error) {
  //     return <div>Error: {error}</div>;
  // }

  const saveCourseProgress = async (progress: number): Promise<void> => {
  try {
    const response = await fetch(`${API.savepartialProgress}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ progress }), // Send the progress in the body
    });

    if (!response.ok) {
      throw new Error('Failed to save course progress');
    }

    const data = await response.json();
    console.log('Progress saved successfully:', data);
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

const calculateProgress = (): number => {
  return Math.floor(Math.random() * 100); 
};

const handleVideoEnd = (): void => {
  console.log('Video ended, saving progress...');
  const newProgress = calculateProgress(); // You can define how to calculate progress
  setCourseProgress(newProgress);
  saveCourseProgress(newProgress);
  
};



  const handleVideoChange = (newUrl:string): void => {
    console.log('Changing video URL to:', newUrl); 
    setVideoUrl(newUrl);
    if (videoPlayerRef.current) {
      videoPlayerRef.current.loadVideo(newUrl);
      videoPlayerRef.current.playVideo();
    }
  };


  return (
    <div className="dark:bg-background bg-background-light padding-x py-12 w-full h-full">
      <DashboardHeader from="videoSection" />
      <main className="flex gap-6 flex-col lg:flex-row mt-8">
        <div className="flex-grow flex gap-6 flex-col">
          <div className="flex flex-col gap-3">
            <span className="body-text-md text-foreground-light dark:text-neutral-10">
              Lesson 12 of 118
            </span>
            <div className="flex justify-between items-center">
              <h2 className="h2 text-foreground-light dark:text-neutral-10" 
             >
                Topic Name
              
              </h2>
              <div className="flex gap-5">
                <button>
                  <img src={arrowUp} alt="link icon" className="-rotate-90" />
                </button>
                <button>
                  <img src={arrowUp} alt="link icon" className="rotate-90" />
                </button>
              </div>
            </div>
          </div>
            <VideoPlayer ref={videoPlayerRef} initialUrl={videoUrl}  onEnded={handleVideoEnd}
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
                  // key={index}
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
                  // key={index}
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
            <h2 className="h2 text-foreground-light dark:text-neutral-10">
              Course <br /> Progress
            </h2>

            <div
              className="h-[120px] w-[120px] aspect-square rounded-full bg-white dark:bg-background flex items-center justify-center relative dark:"
              style={{
                filter: 'drop-shadow(0px 0px 91.6px rgba(36, 107, 253, 0.16))',
              }}
            >
              <span className="h3 text-foreground-light dark:text-neutral-10 ">
                {/* {VIDEO_DATA.overallProgress}% */}
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
              <CoursePart handleVideoChange={handleVideoChange} key={course.id} i={index} {...course}   progress={(course.progress || 0).toString()}
              course_name={course.course_name || 'Default Course Name'}
             
              sections={course.sections ? course.sections : []} 
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
export default VideoSection
