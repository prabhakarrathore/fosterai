import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';

export default function Logo() {
  return (
    <Box className="flex justify-center">
      <NavLink to="/">
        <img src="/assets/logo.png" alt="MMJC" className='h-10' />
      </NavLink>
    </Box>
  );
};