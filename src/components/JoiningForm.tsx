import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import {
  TextField,
  Button,
  CircularProgress,
  Typography,
  IconButton,
} from '@mui/material';
import { toast } from 'sonner';
import { useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import JoiningImage from '../assets/img/technologies-banner.jpg';
import config from '../util/apiConfig';

interface FormValues {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  educationLevel: string;
  collageName: string;
  coursesInterested: string[]; // Now an array of strings
}


const TraineeRegistrationForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const mutation = useMutation({
    mutationKey: ['registerTrainee'],
    mutationFn: async (data: FormValues) => {
      // Determine role based on the route
      const role = location.pathname.includes('Admin') ? 'Admin' : 'Intern';

      // Prepare the data in the format required by the backend
      const formattedData = {
        ...data,
        coursesInterested: Array.isArray(data.coursesInterested)
          ? data.coursesInterested
          : typeof data.coursesInterested === 'string'
            ? (data.coursesInterested as string).split(',').map((course) => course.trim()) : [],
        role: role, // Add role to the data
      };


      const response = await fetch(`${config.apiBaseUrl}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to register trainee');
      }

      return response.json();
    },


    onError: (error) => {
      console.error('Registration failed:', error);
      toast.error('Registration failed. Please try again.');
    },
    onSuccess: (data) => {
      console.log('Registration successful:', data);
      toast.success('Registration successful!');
      navigate('/');
    },
  });


  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Register button clicked');
    console.log('Form data:', data);
    mutation.mutate(data);
  };


  return (
    <div className='flex justify-center items-center'>
      <div className="w-full h-full object-cover relative" style={{
        backgroundImage: `linear-gradient(rgba(24, 29, 56, 0.7), rgba(24, 29, 56, 0.7)), url(${JoiningImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '56.25em',
      }} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl p-4 mx-4 space-y-4 bg-white shadow-lg rounded-lg absolute 2xl:p-12"
      >
        <IconButton
          aria-label="close"
          onClick={() => navigate('/')}
          className="absolute top-2 right-0 float-right"
        >
          <AiOutlineClose size={24} color='red' />
        </IconButton>

        <Typography variant="h2" component="h1" color="grey" className=" flex justify-center gap-2">
          {/* <FaPen size={20} className='mt-1' /> */}
          Apply For Internship
        </Typography>


        <div className='flex flex-wrap gap-4'>
          {/* Full Name */}
          <TextField
            fullWidth
            multiline
            required
            InputLabelProps={{
              style: { color: '#3974cb' }, shrink: true
            }}
            label="Full Name"
            {...register('fullName', { required: 'Full Name is required' })}
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
          />
          {/* Email Address */}
          <TextField
            type="email"
            label="Email Address"
            fullWidth
            multiline
            InputLabelProps={{
              style: { color: '#3974cb' }, shrink: true,
            }}
            required
            {...register('emailAddress', {
              required: 'Email Address is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            })}
            error={!!errors.emailAddress}
            helperText={errors.emailAddress?.message}
          />
          {/* Phone Number */}
          <TextField
            fullWidth
            type="tel"
            label="Phone Number"
            multiline
            required
            InputLabelProps={{
              style: { color: '#3974cb' }, shrink: true,
            }}
            {...register('phoneNumber', {
              required: 'Phone Number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Invalid phone number',
              },
            })}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
          />
          {/* Address */}
          <TextField
            fullWidth
            multiline
            label="Address"
            {...register('address')}
            InputLabelProps={{
              style: { color: '#3974cb' }, shrink: true,
            }}
            error={!!errors.address}
            helperText={errors.address?.message}
          />

          {/* Education Level */}
          <TextField
            fullWidth
            multiline
            InputLabelProps={{
              style: { color: '#3974cb' }, shrink: true,
            }}
            label="Highest Qualification"
            {...register('educationLevel', {
              required: 'Education Level is required',
            })}
            required
            error={!!errors.educationLevel}
            helperText={errors.educationLevel?.message}
          />
          {/* Collage Name */}
          <TextField
            label="Collage Name"
            fullWidth
            multiline
            InputLabelProps={{
              style: { color: '#3974cb' }, shrink: true,
            }}
            {...register('collageName', {
              required: 'Collage Name is required',
            })}
            error={!!errors.collageName}
            helperText={errors.collageName?.message}
          />
          {/* Courses of Interest */}
          <TextField
            fullWidth
            label="Courses of Interest"
            multiline
            required
            InputLabelProps={{
              style: { color: '#3974cb' }, shrink: true,
            }}
            {...register('coursesInterested', {
              required: 'Please specify your courses of interest',
            })}
            error={!!errors.coursesInterested}
            helperText={errors.coursesInterested?.message}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={mutation.isPending}
          >
            {mutation.isPending ? <CircularProgress size={24} /> : 'Send'}
          </Button>
        </div>
      </form >
    </div>
  );
};

export default TraineeRegistrationForm;
