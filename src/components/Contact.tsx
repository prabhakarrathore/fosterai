import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from 'react-icons/fa';
import MyTextField from '../controls/FormControls/MyTextField';
import PrimaryButton from '../controls/FormControls/PrimaryButton';
import Banner, { withBannerSupport } from '../controls/Banner';
import { toast } from 'sonner';
import config from '../util/apiConfig';

interface ContactUsFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const methods = useForm<ContactUsFormData>();

  // API request to submit the form
  const onSubmit = async (data: ContactUsFormData) => {
    console.log('Submitted data:', data);

    try {
      const response = await fetch(`${config.apiBaseUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Check if the response has content before parsing as JSON
      const contentType = response.headers.get('Content-Type');
      let result;
      
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
        console.log(result); 
      }
  
      toast.success('Contact form submitted successfully');
      methods.reset();
    } catch (error) {
      toast.error('Failed to submit contact form');
    }
  };
  

  return (
    <Container maxWidth="lg" className="py-12">
      <div className="text-center mb-12">
        <h6 className="text-primary text-lg font-extrabold mb-2 bg-white inline-block px-3">Contact Us</h6>
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </div>
      <Grid container spacing={4}>
        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Typography variant="h5" className="font-semibold pb-10">Get In Touch</Typography>
          <Box className="flex items-center mb-6">
            <Box className="bg-primary flex items-center justify-center w-[85px] h-12 text-white rounded-full">
              <FaMapMarkerAlt />
            </Box>
            <Box className="ml-4">
              <Typography variant="h5" className="text-primary font-bold">Office</Typography>
              <Typography className="text-gray-700">Ambika 2, Plot No 119, Rajendra Nagar, Ghaziabad, Uttar Pradesh 201005</Typography>
            </Box>
          </Box>
          <Box className="flex items-center mb-6">
            <Box className="bg-primary flex items-center justify-center w-12 h-12 text-white rounded-full">
              <FaPhoneAlt />
            </Box>
            <Box className="ml-4">
              <Typography variant="h5" className="text-primary font-bold">Mobile</Typography>
              <Typography className="text-dark">+91 9582273806</Typography>
            </Box>
          </Box>
          <Box className="flex items-center">
            <Box className="bg-primary flex items-center justify-center w-12 h-12 text-white rounded-full">
              <FaEnvelopeOpen />
            </Box>
            <Box className="ml-4">
              <Typography variant="h5" className="text-primary font-bold">Email</Typography>
              <Typography className="text-gray-700">fosterai123456@gmail.com</Typography>
            </Box>
          </Box>
        </Grid>

        {/* Google Map Embed */}
        <Grid item xs={12} md={4}>
          <iframe
            className="w-full h-96 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7000.0984848914495!2d77.33942481750131!3d28.688173550081228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb49b2bcade7%3A0x127076a6a8792e!2sAmbika%20Apartment%2C%202%2F119!5e0!3m2!1sen!2sin!4v1721109485940!5m2!1sen!2sin"
            frameBorder="0"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
            loading="lazy"
          ></iframe>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={4}>
          <FormProvider {...methods}>
            <Banner />
            <Box component="form" onSubmit={methods.handleSubmit(onSubmit)}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <MyTextField name="name" label="Your Name" size="medium" />
                </Grid>
                <Grid item xs={12}>
                  <MyTextField name="email" label="Your Email" size="medium" />
                </Grid>
                <Grid item xs={12}>
                  <MyTextField name="subject" label="Subject" size="medium" />
                </Grid>
                <Grid item xs={12}>
                  <MyTextField name="message" label="Message" size="medium" multiline rows={4}  />
                </Grid>
                <Grid item xs={12}>
                  <PrimaryButton type="submit" label="Send Message" variant="contained" size="large" fullWidth />
                </Grid>
              </Grid>
            </Box>
          </FormProvider>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withBannerSupport(ContactUs);
