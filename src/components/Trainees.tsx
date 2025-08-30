import React, { useEffect, useState } from 'react';
import config from '../util/apiConfig';
import { getImageUrl } from '../util/imageConfig';

interface Trainee {
    _id: string;
    traineeId: {
        _id: string;
        fullName: string;
        photo: string;
    };
    courseName: string;
    courseStatus: string;
}

const GetTrainees = async (): Promise<Trainee[]> => {
    const response = await fetch(`${config.apiBaseUrl}/admin/course`); // Replace with your API endpoint
    const data = await response.json();
    return data.assignments; // Return assignments directly
};

const Tainees: React.FC = () => {
    const [trainees, setTrainees] = useState<Trainee[]>([]);

    useEffect(() => {
        const fetchTrainees = async () => {
            try {
                const assignments = await GetTrainees();
                setTrainees(assignments);
            } catch (error) {
                console.error('Error fetching trainees:', error);
            }
        };
        fetchTrainees();
    }, []);

    return (
        <div className="container mx-auto sm:pt-0 md:pb-12 sm:px-10 lg:px-10">
            <div className="text-center mb-12">
                <h6 className="text-primary text-lg font-extrabold mb-2">TRAINEES</h6>
                <h1 className="text-4xl font-bold">Our Talents</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trainees.map((trainee) => (
                    <div
                        key={trainee._id}
                        className="shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 bg-light"
                    >
                        <div className="relative h-48">
                            <img
                                className="absolute inset-0 w-full h-full object-cover"
                                src={getImageUrl(trainee.traineeId.photo)}
                                alt={trainee.traineeId.fullName}
                            />
                        </div>
                        <div className="p-6 text-center">
                            <h5 className="text-xl font-semibold mb-2">{trainee.traineeId.fullName}</h5>
                            <h5 className='text-md font-medium mb-2'>{trainee.courseName}</h5>
                            <h5 className='text-md font-medium mb-2'>{trainee.courseStatus}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tainees;
