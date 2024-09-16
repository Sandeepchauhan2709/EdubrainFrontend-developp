interface AssignmentsType {
  course: string
  assignments: Array<{
    status: 'submitted' | 'pending' | 'completed'
    title: string
    dueDate: string
    tasks: Array<{
      title: string
      status: 'checked' | 'submitted' | 'pending'
    }>
  }>
}

const ASSIGNMENTS: AssignmentsType[] = [
  {
    course: 'UI/UX Design',
    assignments: [
      {
        status: 'submitted',
        title: 'Design a website',
        dueDate: '12, May 2024',
        tasks: [
          {
            title: 'Task 1',
            status: 'checked',
          },
        ],
      },
      {
        status: 'pending',
        title: 'Create wireframes',
        dueDate: '20, May 2024',
        tasks: [
          {
            title: 'Task 1',
            status: 'pending',
          },
          {
            title: 'Task 2',
            status: 'pending',
          },
        ],
      },
      {
        status: 'completed',
        title: 'Finalize UI elements',
        dueDate: '30, May 2024',
        tasks: [
          {
            title: 'Task 1',
            status: 'checked',
          },
          {
            title: 'Task 2',
            status: 'checked',
          },
          {
            title: 'Task 3',
            status: 'checked',
          },
        ],
      },
      {
        status: 'pending',
        title: 'Gather user feedback',
        dueDate: '5, June 2024',
        tasks: [
          {
            title: 'Task 1',
            status: 'pending',
          },
          {
            title: 'Task 2',
            status: 'pending',
          },
        ],
      },
      {
        status: 'pending',
        title: 'Create mockups',
        dueDate: '15, June 2024',
        tasks: [
          {
            title: 'Task 1',
            status: 'pending',
          },
          {
            title: 'Task 2',
            status: 'pending',
          },
          {
            title: 'Task 3',
            status: 'pending',
          },
        ],
      },
      {
        status: 'submitted',
        title: 'Implement responsive design',
        dueDate: '25, June 2024',
        tasks: [
          {
            title: 'Task 1',
            status: 'checked',
          },
          {
            title: 'Task 2',
            status: 'submitted',
          },
        ],
      },
      {
        status: 'pending',
        title: 'Perform usability testing',
        dueDate: '10, July 2024',
        tasks: [
          {
            title: 'Task 1',
            status: 'pending',
          },
          {
            title: 'Task 2',
            status: 'pending',
          },
          {
            title: 'Task 3',
            status: 'pending',
          },
        ],
      },
      {
        status: 'submitted',
        title: 'Optimize performance',
        dueDate: '20, July 2024',
        tasks: [
          {
            title: 'Task 1',
            status: 'submitted',
          },
          {
            title: 'Task 2',
            status: 'checked',
          },
          {
            title: 'Task 3',
            status: 'submitted',
          },
        ],
      },
      {
        status: 'pending',
        title: 'Refine typography',
        dueDate: '5, August 2024',
        tasks: [
          {
            title: 'Task 1',
            status: 'pending',
          },
          {
            title: 'Task 2',
            status: 'pending',
          },
          {
            title: 'Task 3',
            status: 'pending',
          },
        ],
      },
      {
        status: 'completed',
        title: 'Prepare presentation',
        dueDate: '15, August 2024',
        tasks: [
          {
            title: 'Task 1',
            status: 'checked',
          },
          {
            title: 'Task 2',
            status: 'checked',
          },
          {
            title: 'Task 3',
            status: 'checked',
          },
        ],
      },
    ],
  },
  {
    course: 'Mern Stack',
    assignments: [
      {
        status: 'submitted',
        title: 'Design a website',
        dueDate: '12, May 2024',
        tasks: [
          {
            title: 'Task 1',
            status: 'checked',
          },
        ],
      },
      {
        status: 'pending',
        title: 'Create wireframes',
        dueDate: '20, May 2024',
        tasks: [
          {
            title: 'Task 1',
            status: 'pending',
          },
          {
            title: 'Task 2',
            status: 'pending',
          },
        ],
      },
      {
        status: 'completed',
        title: 'Finalize UI elements',
        dueDate: '30, May 2024',
        tasks: [
          {
            title: 'Task 1',
            status: 'checked',
          },
          {
            title: 'Task 2',
            status: 'checked',
          },
          {
            title: 'Task 3',
            status: 'checked',
          },
        ],
      },
      {
        status: 'pending',
        title: 'Gather user feedback',
        dueDate: '5, June 2024',
        tasks: [
          {
            title: 'Task 1',
            status: 'pending',
          },
          {
            title: 'Task 2',
            status: 'pending',
          },
        ],
      },
      {
        status: 'pending',
        title: 'Create mockups',
        dueDate: '15, June 2024',
        tasks: [
          {
            title: 'Task 1',
            status: 'pending',
          },
          {
            title: 'Task 2',
            status: 'pending',
          },
          {
            title: 'Task 3',
            status: 'pending',
          },
        ],
      },
      {
        status: 'submitted',
        title: 'Implement responsive design',
        dueDate: '25, June 2024',
        tasks: [
          {
            title: 'Task 1',
            status: 'checked',
          },
          {
            title: 'Task 2',
            status: 'submitted',
          },
        ],
      },
      {
        status: 'pending',
        title: 'Perform usability testing',
        dueDate: '10, July 2024',
        tasks: [
          {
            title: 'Task 1',
            status: 'pending',
          },
          {
            title: 'Task 2',
            status: 'pending',
          },
          {
            title: 'Task 3',
            status: 'pending',
          },
        ],
      },
      {
        status: 'submitted',
        title: 'Optimize performance',
        dueDate: '20, July 2024',
        tasks: [
          {
            title: 'Task 1',
            status: 'submitted',
          },
          {
            title: 'Task 2',
            status: 'checked',
          },
          {
            title: 'Task 3',
            status: 'submitted',
          },
        ],
      },
      {
        status: 'pending',
        title: 'Refine typography',
        dueDate: '5, August 2024',
        tasks: [
          {
            title: 'Task 1',
            status: 'pending',
          },
          {
            title: 'Task 2',
            status: 'pending',
          },
          {
            title: 'Task 3',
            status: 'pending',
          },
        ],
      },
      {
        status: 'completed',
        title: 'Prepare presentation',
        dueDate: '15, August 2024',
        tasks: [
          {
            title: 'Task 1',
            status: 'checked',
          },
          {
            title: 'Task 2',
            status: 'checked',
          },
          {
            title: 'Task 3',
            status: 'checked',
          },
        ],
      },
    ],
  },
]

export default ASSIGNMENTS
