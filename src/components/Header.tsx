import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import AboutImage from '../assets/img/about-us-banner.jpg';
import Carousel from '../assets/img/carousel-6.jpg';
import CoursesImage from '../assets/img/courses-banner.avif';
import ServicesImage from '../assets/img/services-banner.avif';
import TechnologiesImage from '../assets/img/technologies-banner.jpg';
import ContactImage from '../assets/img/contact-us-banner.jpg';
import TeamsImage from '../assets/img/teams-banner.jpg';


const Header: React.FC = () => {
  // Correct typing: ref to a HTMLDivElement or null
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Ensure the DOM is fully loaded before scrolling
    const timer = setTimeout(() => {
      targetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100); // Adding a slight delay can solve timing issues

    return () => clearTimeout(timer);
  }, []);


  const location = useLocation();

  // Function to get the title and background image based on the route
  const getHeaderContent = () => {
    switch (location.pathname) {
      case '/about':
        return {
          title: 'About Us',
          image: AboutImage,
        };
      case '/courses':
        return {
          title: 'Courses',
          image: CoursesImage,
        };
      case '/services':
        return {
          title: 'Services',
          image: ServicesImage,
        };
      // case '/technologies':
      //   return {
      //     title: 'Technologies',
      //     image: TechnologiesImage,
      //   };
      case '/trainers':
        return {
          title: 'Trainers',
          image: TeamsImage,
        };
      case '/our-trainees':
        return {
          title: 'Our Trainees',
          image: Carousel, // Assuming Carousel is a placeholder image for trainees
        };
      case '/contactus':
        return {
          title: 'Contact Us',
          image: ContactImage,
        };
      case '/teams':
        return {
          title: 'Teams',
          image: TeamsImage,
        };
      default:
        return {
          title: 'Welcome to FosterAI',
          image: TechnologiesImage,
        };
    }
  };

  const { title, image } = getHeaderContent();

  return (
    <div
      ref={targetRef}
      className="py-16 mb-14"
      style={{
        backgroundImage: `linear-gradient(rgba(24, 29, 56, .7), rgba(24, 29, 56, .7)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto lg:h-24">
        <div className="text-center">
          <h1 className="text-white text-5xl font-extrabold">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
