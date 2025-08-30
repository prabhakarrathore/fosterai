import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import aboutImg from '../assets/img/about.jpg';

const AboutUs: React.FC = () => {

  return (
    <div className="container mx-auto py-12 px-10 snap-x">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="relative min-h-[400px]" data-wow-delay="0.1s">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={aboutImg}
            alt="About FosterAI"
          />
        </div>

        {/* Text Section */}
        <div className="wow fadeInUp" data-wow-delay="0.3s">
          <h6 className="section-title text-start text-primary pe-3 inline-block mb-4 font-bold">
            About Us
          </h6>
          <h1 className="text-4xl font-bold mb-4">Welcome to FosterAI</h1>
          <p className="mb-4">
            Welcome to FosterAI, your gateway to a vibrant future in technology. At FosterAI, we are dedicated to nurturing the next generation of IT professionals through comprehensive internship programs and a suite of specialized services designed to propel aspiring tech enthusiasts towards success in the dynamic world of technology.
          </p>
          <p className="mb-4">
            Beyond internships, FosterAI also offers a range of cutting-edge services in web development, mobile development, cloud solutions, and more. From conceptualization to execution, our team of experts is committed to delivering innovative solutions that meet the evolving needs of your business in the digital age.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center">
              <i className="fa fa-arrow-right text-primary mr-2"></i>
              <p className="mb-0"><FaArrowRight className="inline mr-2 text-primary" />Skilled Instructors</p>
            </div>
            <div className="flex items-center">
              <i className="fa fa-arrow-right text-primary mr-2"></i>
              <p className="mb-0"><FaArrowRight className="inline mr-2 text-primary" />Online Classes</p>
            </div>
            <div className="flex items-center">
              <i className="fa fa-arrow-right text-primary mr-2"></i>
              <p className="mb-0"><FaArrowRight className="inline mr-2 text-primary" />Certificate</p>
            </div>
          </div>
          {/* Optional Read More Button */}
          {/* <a className="btn-primary py-3 px-5 mt-2 text-light bg-primary rounded" href="#">
            Read More
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
