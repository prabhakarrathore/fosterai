import React from 'react';
import { FaGraduationCap, FaGlobe, FaHome, FaBookOpen } from 'react-icons/fa';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="group service-item text-center pt-3 bg-light text-dark hover:bg-primary hover:text-light transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
          <div className="p-6">
            <FaGraduationCap className="text-primary text-4xl mb-4 mx-auto transition-colors duration-300 ease-in-out group-hover:text-light" />
            <h5 className="mb-3 text-xl font-semibold">Skilled Instructors</h5>
            <p> Learn from industry experts who bring real-world experience and insights to the classroom.</p>
          </div>
        </div>
        <div className="group service-item text-center pt-3 bg-light text-dark hover:bg-primary hover:text-light transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
          <div className="p-6">
            <FaGlobe className="text-primary text-4xl mb-4 mx-auto transition-colors duration-300 ease-in-out group-hover:text-light" />
            <h5 className="mb-3 text-xl font-semibold">Online Classes</h5>
            <p className="">
              Students can attend lectures, participate in discussions, and complete assignments through digital platforms.
            </p>
          </div>
        </div>
        <div className="group service-item text-center pt-3 bg-light text-dark hover:bg-primary hover:text-light transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
          <div className="p-6">
            <FaHome className="text-primary text-4xl mb-4 mx-auto transition-colors duration-300 ease-in-out group-hover:text-light" />
            <h5 className="mb-3 text-xl font-semibold">IT Solutions</h5>
            <p> Get tailored IT solutions that address your unique business challenges and drive growth. </p>
          </div>
        </div>
        <div className="group service-item text-center pt-3 bg-light text-dark hover:bg-primary hover:text-light transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
          <div className="p-6">
            <FaBookOpen className="text-primary text-4xl mb-4 mx-auto transition-colors duration-300 ease-in-out group-hover:text-light" />
            <h5 className="mb-3 text-xl font-semibold">10+ IT Language Courses</h5>
            <p> Master a variety of IT languages with our courses designed to meet industry standards. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
