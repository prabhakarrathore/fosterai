import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import config from '../util/apiConfig';
import { getImageUrl } from '../util/imageConfig';


type Trainer = {
  name: string;
  expertise: string;
  image: string;
  description: string;
  linkedin: string;
  instagram: string;
};

const fetchTrainers = async (): Promise<Trainer[]> => {
  const response = await fetch(`${config.apiBaseUrl}/trainers`);
  const trainersData = await response.json();

  if (!response.ok) {
    throw new Error(trainersData.message || 'Failed to fetch trainers data');
  }

  return trainersData.trainers.map((trainer: any) => ({
    name: trainer.trainer_name,
    expertise: trainer.trainer_expertise,
    image: trainer.trainer_image
      ? getImageUrl(trainer.trainer_image)
      : getImageUrl('uploads/images/1749047187813-Screenshot%20from%202025-05-28%2019-15-59.png'),
    description: trainer.trainer_description || 'No description available',
    linkedin: trainer.trainer_linkedin_url || 'no-linkedin',
    instagram: trainer.trainer_instagram_url || 'no-instagram',
  }));
};

const Teams: React.FC = () => {

  const { data: teamMembers = [], isLoading, error } = useQuery<Trainer[]>({
    queryKey: ['trainers'],
    queryFn: fetchTrainers,
  });

  const [displayedMembers, setDisplayedMembers] = useState<number[]>([]);

  // useEffect(() => {
  //   if (teamMembers.length >= 4) {
  //     setDisplayedMembers([0, 1, 2, 3]);
  //   } else {
  //     const initialMembers = teamMembers.map((_, index) => index);
  //     setDisplayedMembers(initialMembers);
  //   }
  // }, [teamMembers]);
  useEffect(() => {
    // if (teamMembers.length >= 4) {
    //   const newMembers = [0, 1, 2, 3,4];
    //   // Only update if different
    //   if (JSON.stringify(displayedMembers) !== JSON.stringify(newMembers)) {
    //     setDisplayedMembers(newMembers);
    //   }
    // } else {
    const initialMembers = teamMembers.map((_, index) => index);
    if (JSON.stringify(displayedMembers) !== JSON.stringify(initialMembers)) {
      setDisplayedMembers(initialMembers);
    }
    // }
  }, [teamMembers, displayedMembers]);


  useEffect(() => {
    if (teamMembers.length <= 4) return;

    const interval = setInterval(() => {
      setDisplayedMembers((prev) => {
        const nextStartIndex = (prev[0] + 1) % teamMembers.length;
        return [
          nextStartIndex,
          (nextStartIndex + 1) % teamMembers.length,
          (nextStartIndex + 2) % teamMembers.length,
          (nextStartIndex + 3) % teamMembers.length,
        ];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [teamMembers]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto pb-12 px-10">
      <div className="text-center mb-12">
        <h6 className="text-primary text-lg font-extrabold mb-2 bg-white inline-block px-3">Teams</h6>
        <h1 className="text-4xl font-bold">Our Trainers</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayedMembers.map((index) => (
          <div key={index} className="team-item bg-light overflow-hidden">
            <div className="overflow-hidden">
              <img className="w-full h-64 object-cover transition duration-500 ease-in-out transform hover:scale-105 " src={teamMembers[index]?.image} alt={teamMembers[index]?.name} />

            </div>
            <div className="flex justify-center -mt-6">
              <div className="flex justify-center p-2 rounded-lg z-10">
                {teamMembers[index]?.linkedin !== 'no-linkedin' && (
                  <a
                    href={teamMembers[index].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sm-square bg-primary text-light mx-1 p-2 rounded-full"
                  >
                    <FaLinkedinIn />
                  </a>
                )}
                {teamMembers[index]?.instagram !== 'no-instagram' && (
                  <a
                    href={teamMembers[index].instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sm-square bg-primary text-light mx-1 p-2 rounded-full"
                  >
                    <FaInstagram />
                  </a>
                )}
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-2 text-lg font-bold">{teamMembers[index]?.name}</h5>
              <h6 className="mb-2 text-md text-gray-900">{teamMembers[index]?.expertise}</h6>
              <p className="text-gray-600 text-sm">{teamMembers[index]?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
