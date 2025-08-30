// import React, { useEffect, useState } from 'react';
// import config from '../util/apiConfig';
import { getImageUrl } from '../util/imageConfig';

// // Define the TypeScript interface for trainee data
// interface Trainee {
//   _id: string;
//   fullName: string;
//   photo?: string; // Made photo optional to avoid errors
//   InternsTechnology: string;
//   collageName?: string;
// }

// const TraineeList: React.FC = () => {
//   const [trainees, setTrainees] = useState<Trainee[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [isError, setIsError] = useState<boolean>(false);
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [isTransitioning, setIsTransitioning] = useState<boolean>(true); // New state to control transition

//   // Fetch trainees data
//   useEffect(() => {
//     const fetchTrainees = async () => {
//       try {
//         const response = await fetch(`${config.apiBaseUrl}/trainee`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch trainees');
//         }
//         const data = await response.json();
//         const validTrainees = data.trainees.filter((trainee) => trainee.photo); // Filter valid trainees
//         setTrainees([...validTrainees, ...validTrainees]); // Duplicate data for infinite-like loop
//         setIsLoading(false);
//       } catch (error) {
//         setIsError(true);
//         setIsLoading(false);
//         console.error('Error fetching trainees:', error);
//       }
//     };
//     fetchTrainees();
//   }, []);

//   // Handle the sliding effect every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsTransitioning(true); // Enable transition
//       setCurrentIndex((prevIndex) => prevIndex + 1); // Move to the next set
//     }, 2000);

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, [trainees.length]);

//   // Handle wrapping after a slide ends
//   useEffect(() => {
//     if (currentIndex >= trainees.length / 2) {
//       const timeout = setTimeout(() => {
//         setIsTransitioning(false); 
//         setCurrentIndex(0); 
//       }, 700); 

//       return () => clearTimeout(timeout); 
//     }
//   }, [currentIndex, trainees.length]);

//   if (isLoading) return <div className="text-center">Loading trainees...</div>;
//   if (isError) return <div className="text-center text-red-500">Error fetching trainees</div>;

//   return (
//     <div className="container mx-auto sm:pt-0 md:pb-12 sm:px-10 lg:px-10">
//       <div className="text-center mb-12">
//         <h6 className="text-primary text-lg font-extrabold mb-2 bg-white inline-block px-3">Interns</h6>
//         <h1 className="text-4xl font-bold">Interns</h1>
//       </div>
//       <div className="gap-6 p-4 relative overflow-hidden w-full">
//         <div
//           className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-out' : ''}`} 
//           style={{ transform: `translateX(-${currentIndex * 33.33}%)` }} 
//         >
//           {trainees.map((trainee, index) => (
//             <div key={`${trainee._id}-${index}`} className="w-1/3 p-4 flex-shrink-0">
//               <div className="bg-light rounded-lg shadow-lg p-6 text-center">
//                 <div className="mb-4">
//                   <img
//                     src={`http://localhost:8081/${trainee.photo?.replace('\\', '/') || 'default-image.png'}`}
//                     alt={trainee.fullName}
//                     className="rounded-full mx-auto h-24 w-24 object-cover"
//                   />
//                 </div>
//                 <h4 className="text-lg font-semibold mb-2">{trainee.fullName}</h4>
//                 <p className="text-gray-600">{trainee.InternsTechnology || 'No technology specified'}</p>
//                 <p className="text-gray-600">{trainee.collageName || 'No collage specified'}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TraineeList;  




import React, { useEffect, useState } from 'react';
import config from '../util/apiConfig';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// Define the TypeScript interface for trainee data
interface Trainee {
  _id: string;
  fullName: string;
  photo?: string; // Made photo optional to avoid errors
  InternsTechnology: string;
  collageName?: string;
  trainee_linkedin_url?: string; // Optional, if you want to include a LinkedIn link
  trainee_instagram_url?: string; // Optional, if you want to include an Instagram link
}

const TraineeList: React.FC = () => {
  const [trainees, setTrainees] = useState<Trainee[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Current index for sliding effect

  // Fetch trainees data
  useEffect(() => {
    const fetchTrainees = async () => {
      try {
        const response = await fetch(`${config.apiBaseUrl}/trainee`);
        if (!response.ok) {
          throw new Error('Failed to fetch trainees');
        }
        const data = await response.json();
        const validTrainees = data.trainees.filter((trainee: any) => trainee.photo); // Filter valid trainees
        setTrainees(validTrainees);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        console.error('Error fetching trainees:', error);
      }
    };
    fetchTrainees();
  }, []);

  // Automatic slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trainees.length); // Increment index and wrap around
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [trainees.length]);

  if (isLoading) return <div className="text-center">Loading trainees...</div>;
  if (isError) return <div className="text-center text-red-500">Error fetching trainees</div>;

  // Function to get the current set of trainees based on the current index
  const getCurrentSet = () => {
    const startIndex = currentIndex; // Start index for the current set of 4 trainees
    const endIndex = startIndex + 4; // End index for the current set of 4 trainees
    const currentSet = [];

    // Loop to get the current set of trainees with wrap around logic
    for (let i = startIndex; i < endIndex; i++) {
      const index = i % trainees.length; // Wrap around using modulo
      currentSet.push(trainees[index]);
    }

    return currentSet;
  };

  const currentTrainees = getCurrentSet();

  return (
    <div className="container mx-auto pb-12 px-10">
      <div className="text-center mb-12">
        <h6 className="text-primary text-lg font-extrabold mb-2 bg-white inline-block px-3">Our Trainees</h6>
        <h1 className="text-4xl font-bold">Our Talents</h1>
      </div>
      <div className="relative overflow-hidden w-full">
        <div className="flex transition-transform duration-700 ease-in-out gap-8 mb-5">
          {currentTrainees.map((trainee) => (
            <div key={trainee._id} className="team-item bg-light shadow-lg rounded-lg overflow-hidden w-1/4">
              <div className="overflow-hidden">
                <img
                  src={getImageUrl(trainee.photo?.replace('\\', '/') || 'default-image.png')}
                  alt={trainee.fullName}
                  className="w-full h-64 object-cover"
                />
              </div>
              {<div className="flex justify-center -mt-6">
                <div className="flex justify-center p-2 rounded-lg z-10">
                  {trainee?.trainee_linkedin_url && (
                    <a href={trainee.trainee_linkedin_url} target="_blank" rel="noopener noreferrer" className="btn-sm-square bg-primary text-light mx-1 p-2 rounded-full">
                      <FaLinkedinIn />
                    </a>
                  )}
                  {trainee.trainee_instagram_url && (
                    <a href={trainee.trainee_instagram_url} target="_blank" rel="noopener noreferrer" className="btn-sm-square bg-primary text-light mx-1 p-2 rounded-full">
                      <FaInstagram />
                    </a>
                  )}
                </div>
              </div>}
              <div className="text-center p-4">
                <h5 className="mb-2 text-lg font-bold">{trainee.fullName}</h5>
                <p className="text-gray-600 text-sm">{trainee.InternsTechnology || 'No technology specified'}</p>
                <p className="text-gray-600 text-sm">{trainee.collageName || 'No college specified'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TraineeList;
