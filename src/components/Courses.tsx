import Link from 'next/link'
import { Course } from '@/types/courses'

interface CoursesProps {
  courses: Course[]
}

export default function Courses({ courses }: CoursesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course: Course) => (
        <div key={course.id} className="bg-blue-200 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-1">{course.title}</h2>
          <small className="block text-gray-600 mb-2">
            Level: {course.level}
          </small>
          <p className="mb-4 text-sm text-gray-800">{course.description}</p>
          <Link
            href={course.link}
            target="_blank"
            className="inline-block py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition"
          >
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  )
}