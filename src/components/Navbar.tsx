// import * as React from 'react';
// import { MdOutlineMenu } from "react-icons/md";
// import Logo from '../assets/images/logo.png';
// // import Button from '../components/Button';
// import { Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//     const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//     const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
//     const navigate = useNavigate();

//     const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };

//     const handleLoginNavigation = () => {
//         navigate('/login');
//     };

//     return (
//         <nav className="bg-white shadow flex">
//             <div className="container mx-auto px-4">
//                 <div className="flex justify-between items-center h-16">
//                     <div className="flex-shrink-0">
//                         <a href="#app-bar-with-responsive-menu" className="flex items-center">
//                             <img src={Logo} alt='Logo' className='h-10' />
//                         </a>
//                     </div>
//                     <div className="hidden md:flex md:items-center md:space-x-6">
//                         {pages.map((page) => (
//                             <a
//                                 key={page}
//                                 href="#"
//                                 className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
//                             >
//                                 {page}
//                             </a>
//                         ))}
//                     </div>
//                     <div className="flex items-center">
//                         <div className="hidden md:block">
//                             <button
//                                 onClick={handleOpenUserMenu}
//                                 className="text-gray-800 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
//                             >
//                             </button>
//                         </div>
//                         <div className="md:hidden">
//                             <button
//                                 onClick={handleOpenNavMenu}
//                                 className="text-gray-800 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
//                             >
//                                 <MdOutlineMenu className="h-6 w-6" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className={`${anchorElNav ? 'block' : 'hidden'} md:hidden`}>
//                 <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                     {pages.map((page) => (
//                         <a
//                             key={page}
//                             href="#"
//                             className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
//                             onClick={handleCloseNavMenu}
//                         >
//                             {page}
//                         </a>
//                     ))}
//                 </div>
//             </div>
//             <div className={`${anchorElUser ? 'block' : 'hidden'} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5`}>
//                 {settings.map((setting) => (
//                     <a
//                         key={setting}
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         onClick={handleCloseUserMenu}
//                     >
//                         {setting}
//                     </a>
//                 ))}
//             </div>
//             {/* <Button onClick={handleLoginNavigation} /> */}
//             <Button variant="contained" size="large" onClick={handleLoginNavigation}>
//                 Go to Login
//             </Button>
//         </nav>
//     );
// }

// export default ResponsiveAppBar;





import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Ensure the DOM is fully loaded before scrolling
    const timer = setTimeout(() => {
      targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Adding a slight delay can solve timing issues

    return () => clearTimeout(timer);
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav ref={targetRef} className="bg-light shadow sticky top-0 z-50">
      <div className="container mx-auto lg:flex items-center justify-between p-4 sm:px-8 md:px-10 lg:px-8">
        <div className='flex justify-between'>
          <NavLink to="/" className="text-primary text-2xl font-bold">
            FosterAI
          </NavLink>
          <button
            className="text-dark lg:hidden"
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className={`lg:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col lg:flex-row lg:ml-auto">
            <NavLink
              // exact
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "nav-item nav-link text-primary font-semibold px-3 py-2"
                  : "nav-item nav-link text-dark px-3 py-2"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "nav-item nav-link text-primary font-semibold px-3 py-2"
                  : "nav-item nav-link text-dark px-3 py-2"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? "nav-item nav-link text-primary font-semibold px-3 py-2"
                  : "nav-item nav-link text-dark px-3 py-2"
              }
            >
              Courses
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "nav-item nav-link text-primary font-semibold px-3 py-2"
                  : "nav-item nav-link text-dark px-3 py-2"
              }
            >
              Services
            </NavLink>
            {/* <NavLink
              to="/technologies"
              className={({ isActive }) =>
                isActive
                  ? "nav-item nav-link text-primary font-semibold px-3 py-2"
                  : "nav-item nav-link text-dark px-3 py-2"
              }
            >
              Technologies
            </NavLink> */}
            <NavLink
              to="/trainers"
              className={({ isActive }) =>
                isActive
                  ? "nav-item nav-link text-primary font-semibold px-3 py-2"
                  : "nav-item nav-link text-dark px-3 py-2"
              }
            >
              Trainers
            </NavLink>
            <NavLink
              to="/our-trainees"
              className={({ isActive }) =>
                isActive
                  ? "nav-item nav-link text-primary font-semibold px-3 py-2"
                  : "nav-item nav-link text-dark px-3 py-2"
              }
            >
              Our Trainees
            </NavLink>
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                isActive
                  ? "nav-item nav-link text-primary font-semibold px-3 py-2"
                  : "nav-item nav-link text-dark px-3 py-2"
              }
            >
              Contact
            </NavLink>
          </div>
          <a
            href="/joining-form"
            className="btn font-bold text-dark py-2 px-4 lg:ml-4 lg:mt-0 mt-4 lg:inline-block hidden rounded hover:bg-opacity-90"
          >
            Internship <FaArrowRight className="inline ml-2" />
          </a>
          <a
            href="/joining-form"
            className="btn bg-primary text-light py-2 px-4 lg:ml-4 lg:mt-0 mt-4 lg:inline-block hidden rounded hover:bg-opacity-90"
          >
            Sign in
          </a>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
