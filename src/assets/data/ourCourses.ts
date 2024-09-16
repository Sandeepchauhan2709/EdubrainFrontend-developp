import UiUxCourse from '../images/ui-ux-course-img.png'
import dataScienceCourse from '../images/data-science-course-img.png'
import pythonCourse from '../images/python-course-img.png'
import powerBiCourse from '../images/power-bi-course-img.png'
import mernStackCourse from '../images/mern-stack-course-img.png'

const OUR_COURSES = [
  {
    title: 'UI/UX Design',
    category: 'Visual Art based',
    desc: "Embark on a creative journey with our UI/UX design course, where you'll craft exceptional user experiences. Through hands-on learning, translate theory into real-world impact, building a portfolio that catapults your career in design. Join us and shape the future of user-centric innovation.",
    discountedPrice: 4500,
    basePrice: 5000,
    discount: 10, // in percentage
    lecturesCount: 67,
    duration: '31h 46m',
    image: UiUxCourse,
    _id: '1',
  },
  {
    title: 'Data Science',
    category: 'Data Analysis & Insights',
    desc: 'Dive into the world of data exploration, analysis, and interpretation with our Data Science course. Master the tools and techniques required to extract valuable insights from complex datasets, empowering you to make informed decisions and drive business growth.',
    discountedPrice: 4500,
    basePrice: 5000,
    discount: 10, // in percentage
    lecturesCount: 67,
    duration: '31h 46m',
    image: dataScienceCourse,
    _id: '2',
  },
  {
    title: 'Python',
    category: 'Programming & Development',
    desc: "Unlock the power of programming with Python, the versatile language used by tech giants and startups alike. Whether you're a beginner or an experienced coder, our Python course will equip you with the skills to develop applications, automate tasks, and solve real-world",
    discountedPrice: 4500,
    basePrice: 5000,
    discount: 10, // in percentage
    lecturesCount: 67,
    duration: '31h 46m',
    image: pythonCourse,
    _id: '3',
  },
  {
    title: 'Power Bi',
    category: 'Business Intelligence & Analytics',
    desc: 'Transform raw data into compelling visual narratives with our Power BI course. Learn to harness the capabilities of this leading business analytics tool to create interactive reports and dashboards that drive actionable insights, enabling stakeholders to make informed decisions',
    discountedPrice: 4500,
    basePrice: 5000,
    discount: 10, // in percentage
    lecturesCount: 67,
    duration: '31h 46m',
    image: powerBiCourse,
    _id: '4',
  },
  {
    title: 'MERN Stack',
    category: 'Web Development & Full-Stack',
    desc: 'Build dynamic and responsive web applications from scratch with our MERN Stack course. Explore the seamless integration of MongoDB, Express.js, React, and Node.js, and discover how to leverage this modern stack to develop robust, scalable, and feature-rich applications tailored to meet user demands.',
    discountedPrice: 4500,
    basePrice: 5000,
    discount: 10, // in percentage
    lecturesCount: 67,
    duration: '31h 46m',
    image: mernStackCourse,
    _id: '5',
  },
]
export default OUR_COURSES
