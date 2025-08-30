import React, { useEffect, useState } from 'react';
import config from '../util/apiConfig';
import { getImageUrl } from '../util/imageConfig';

interface Course {
  course_name: string;
  course_description: string;
  course_image: string;
  _id: string;
}

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${config.apiBaseUrl}/courses`);
        const data = await response.json();
        setCourses(data.courses);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto sm:pt-0 md:pb-12 lg:px-10 ">
      <div className="text-center mb-12">
        <h6 className="text-primary text-lg font-extrabold mb-2">COURSES</h6>
        <h1 className="text-4xl font-bold">Popular Courses</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course._id}
            className={`shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 bg-light`}
          >
            <div className="relative h-48">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={getImageUrl(course.course_image.replace(/\\/g, '/'))}
                alt={course.course_name}
              />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-xl font-semibold mb-2">{course.course_name}</h5>
              <p className="text-gray-600">{course.course_description}</p>
              <div className="mt-4">
                <a href="/joining-form" className="btn-primary py-2 px-4 text-light bg-primary rounded-full">
                  Join Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
