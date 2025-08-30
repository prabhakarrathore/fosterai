// import React from 'react';
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
// import { IoMdArrowDropright } from "react-icons/io";

// Import gallery images
import mernImg from '../assets/img/mern.jpg';
import networkingImg from '../assets/img/networking.png';
import awsImg from '../assets/img/aws.avif';
import javaImg from '../assets/img/JAVA.jpg';
import dataAnalysisImg from '../assets/img/Data-Analysis.webp';
import phpImg from '../assets/img/phpphp.jpg';

// const Footer: React.FC = () => {
//     return (
//         <footer className="bg-dark text-light py-12">
//             <div className="xl:container px-16">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {/* Quick Links */}
//                     <div>
//                         <h4 className="text-light mb-4">Quick Links</h4>
//                         <ul className="list-none space-y-2">
//                             <li className='flex mr-2'>
//                                 <IoMdArrowDropright className="mt-0.5 size-5" />
//                                 <a href="/about" className="text-light inline-block  hover:scale-105">
//                                     About Us
//                                 </a>
//                             </li>
//                             <li className='flex mr-2'>
//                                 <IoMdArrowDropright className="mt-0.5 size-5" />
//                                 <a href="/courses" className="text-light inline-block hover:scale-105">
//                                     Courses
//                                 </a>
//                             </li>
//                             <li className='flex mr-2'>
//                                 <IoMdArrowDropright className="mt-0.5 size-5" />
//                                 <a href="/services" className="text-light inline-block hover:scale-105">
//                                     Services
//                                 </a>
//                             </li>
//                             <li className='flex mr-2'>
//                                 <IoMdArrowDropright className="mt-0.5 size-5" />
//                                 <a href="/teams" className="text-light inline-block hover:scale-105">
//                                     Teams
//                                 </a>
//                             </li>
//                             <li className='flex mr-2'>
//                                 <IoMdArrowDropright className="mt-0.5 size-5" />
//                                 <a href="/technologies" className="text-light inline-block hover:scale-105">
//                                     Technologies
//                                 </a>
//                             </li>
//                             <li className='flex'>
//                                 <IoMdArrowDropright className="mt-0.5 size-5" />
//                                 <a href="/contact" className="text-light inline-block hover:scale-105">
//                                     Contact Us
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Contact Info */}
//                     <div>
//                         <h4 className="text-light mb-4">Contact</h4>
//                         <p className="text-gray-400 flex"><FaMapMarkerAlt className="mr-2 mt-1 size-5" /> Ambika 2, Plot No 119, Rajendra Nagar, Ghaziabad, Uttar Pradesh 201005</p>
//                         <p className="text-gray-400 flex"><FaPhoneAlt className="mr-2 mt-1 size-3" /> +91 9582273806</p>
//                         <p className="text-gray-400 flex"><FaEnvelope className="mr-2 mt-1 size-3" /> fosterai123456@gmail.com</p>
//                         <div className="flex space-x-4 mt-4">
//                             <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-primary"><FaTwitter /></a>
//                             <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-primary"><FaFacebookF /></a>
//                             <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-primary"><FaYoutube /></a>
//                             <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-primary"><FaLinkedinIn /></a>
//                         </div>
//                     </div>

//                     {/* Gallery */}
//                     <div>
//                         <h4 className="text-light mb-4">Gallery</h4>
//                         <div className="grid grid-cols-3 gap-2">
//                             <div className="w-24 h-16 overflow-hidden bg-light">
//                                 <img className="w-full h-full object-fill" src="src/assets/img/mern.jpg" alt="MERN Stack Representation" />
//                             </div>
//                             <div className="w-24 h-16 overflow-hidden bg-light">
//                                 <img className="w-full h-full object-fill" src="src/assets/img/networking.png" alt="Networking Concept" />
//                             </div>
//                             <div className="w-24 h-16 overflow-hidden bg-light">
//                                 <img className="w-full h-full object-fill" src="src/assets/img/AWS.png" alt="AWS Logo" />
//                             </div>
//                             <div className="w-24 h-16 overflow-hidden bg-light">
//                                 <img className="w-full h-full object-fill" src="src/assets/img/JAVA.jpg" alt="Java Programming" />
//                             </div>
//                             <div className="w-24 h-16 overflow-hidden bg-light">
//                                 <img className="w-full h-full object-fill" src="src/assets/img/Data-Analysis.webp" alt="Data Analysis" />
//                             </div>
//                             <div className="w-24 h-16 overflow-hidden bg-light">
//                                 <img className="w-full h-full object-fill" src="src/assets/img/phpphp.jpg" alt="PHP Development" />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Newsletter Signup */}
//                     <div>
//                         <h4 className="text-light mb-4">Newsletter</h4>
//                         <p>Send us your query anytime!</p>
//                         <div className="relative mt-4 ">
//                             <input
//                                 className="form-input w-full py-2 px-4 rounded-md bg-light text-dark placeholder-gray-400 focus:ring-2 focus:ring-primary"
//                                 type="email"
//                                 placeholder="Your email"
//                                 aria-label="Email for newsletter signup"
//                             />
//                             <button
//                                 type="button"
//                                 className="bg-primary text-light py-1 px-4 rounded-md absolute top-0 right-0 mt-1 mr-1"
//                             >
//                                 Sign Up
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Footer Bottom Section */}
//             <div className="border-t border-gray-700 mt-8 px-16 pt-5">
//                 <div className="flex flex-col md:flex-row justify-between items-center">
//                     <p className="text-gray-400">&copy; <a href="#" className="text-primary">FosterAI Pvt Ltd</a>, 2024 All rights reserved.</p>
//                     <div className="flex space-x-4 mt-4 md:mt-0">
//                         <a href="#" className="text-gray-400 hover:text-primary">Home</a>
//                         <a href="#" className="text-gray-400 hover:text-primary">Cookies</a>
//                         <a href="#" className="text-gray-400 hover:text-primary">Help</a>
//                         <a href="#" className="text-gray-400 hover:text-primary">FAQs</a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;



import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoMdArrowDropright } from "react-icons/io";

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-light py-12">
            <div className="lg:container lg:mx-auto px-4 sm:px-8 md:px-10 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-light mb-4 text-xl">Quick Links</h4>
                        <ul className="list-none space-y-2">
                            <li className='flex mr-2'>
                                <IoMdArrowDropright className="mt-0.5 size-5" />
                                <a href="/about" className="text-light inline-block hover:scale-105">
                                    About Us
                                </a>
                            </li>
                            <li className='flex mr-2'>
                                <IoMdArrowDropright className="mt-0.5 size-5" />
                                <a href="/courses" className="text-light inline-block hover:scale-105">
                                    Courses
                                </a>
                            </li>
                            <li className='flex mr-2'>
                                <IoMdArrowDropright className="mt-0.5 size-5" />
                                <a href="/services" className="text-light inline-block hover:scale-105">
                                    Services
                                </a>
                            </li>
                            <li className='flex mr-2'>
                                <IoMdArrowDropright className="mt-0.5 size-5" />
                                <a href="/teams" className="text-light inline-block hover:scale-105">
                                    Teams
                                </a>
                            </li>
                            <li className='flex mr-2'>
                                <IoMdArrowDropright className="mt-0.5 size-5" />
                                <a href="/technologies" className="text-light inline-block hover:scale-105">
                                    Technologies
                                </a>
                            </li>
                            <li className='flex'>
                                <IoMdArrowDropright className="mt-0.5 size-5" />
                                <a href="/contactus" className="text-light inline-block hover:scale-105">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-light mb-4 text-xl">Contact</h4>
                        <p className="text-light flex"><FaMapMarkerAlt className="mr-2 mt-1 size-5" /> Ambika 2, Plot No 119, Rajendra Nagar, Ghaziabad, Uttar Pradesh 201005</p>
                        <p className="text-light flex"><FaPhoneAlt className="mr-2 mt-1 size-3" /> +91 9582273806</p>
                        <p className="text-light flex"><FaEnvelope className="mr-2 mt-1 size-3" /> fosterai123456@gmail.com</p>
                        <div className="flex space-x-4 mt-4">
                            <div className="cursor-pointer rounded-full p-2 border-light border-2 hover:bg-light">
                                <a href="#" aria-label="LinkedIn" className="text-light hover:text-primary"><FaLinkedinIn /></a>
                            </div>
                            <div className="rounded-full p-2 border-light border-2 hover:bg-light">
                                <a href="#" aria-label="LinkedIn" className="text-light hover:text-primary"><FaInstagram /></a>
                            </div>
                        </div>
                    </div>

                    {/* Gallery */}
                    <div>
                        <h4 className="text-light mb-4 text-xl">Gallery</h4>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="w-20 h-14 overflow-hidden bg-light">
                                <img className="w-full h-full object-fill" src={mernImg} alt="MERN Stack Representation" />
                            </div>
                            <div className="w-20 h-14 overflow-hidden bg-light">
                                <img className="w-full h-full object-fill" src={networkingImg} alt="Networking Concept" />
                            </div>
                            <div className="w-20 h-14 overflow-hidden bg-light">
                                <img className="w-full h-full object-fill" src={awsImg} alt="AWS Logo" />
                            </div>
                            <div className="w-20 h-14 overflow-hidden bg-light">
                                <img className="w-full h-full object-fill" src={javaImg} alt="Java Programming" />
                            </div>
                            <div className="w-20 h-14 overflow-hidden bg-light">
                                <img className="w-full h-full object-fill" src={dataAnalysisImg} alt="Data Analysis" />
                            </div>
                            <div className="w-20 h-14 overflow-hidden bg-light">
                                <img className="w-full h-full object-fill" src={phpImg} alt="PHP Development" />
                            </div>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div>
                        <h4 className="text-light mb-4 text-xl">Newsletter</h4>
                        <p>Send us your query anytime!</p>
                        <div className="relative mt-4 ">
                            <input
                                className="form-input w-full py-2 px-4 rounded-md bg-light text-dark placeholder-gray-400 focus:ring-2 focus:ring-primary"
                                type="email"
                                placeholder="Your email"
                                aria-label="Email for newsletter signup"
                            />
                            <button
                                type="button"
                                className="bg-primary text-light py-1 px-4 rounded-md absolute top-0 right-0 mt-1 mr-1"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="border-t border-gray-700 mt-8 lg:container sm:px-8 md:px-10 lg:mx-auto px-4 lg:px-16 pt-5">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-light">&copy; <a href="#" className="text-primary">FosterAI Pvt Ltd</a>, 2024 All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-light hover:text-primary">Home</a>
                        <a href="#" className="text-light hover:text-primary">Cookies</a>
                        <a href="#" className="text-light hover:text-primary">Help</a>
                        <a href="#" className="text-light hover:text-primary">FAQs</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
