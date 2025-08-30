import { Route, Routes } from 'react-router-dom'
import './App.css'
// import { Button } from '@mui/material';
import Login from './pages/login/Login'
import Home from './pages/home/Home';
import Courses from './pages/courses/Courses';
import Teams from './pages/teams/Teams';
import Services from './pages/services/Services';
import ContactUs from './pages/contactus/ContactUs';
import About from './pages/about/About';
import Trainer from './pages/Trainer/Trainers'
// import Technology from './pages/technology/Technology';
import JoiningForm from './components/JoiningForm';
import Ourtrainees from './pages/Trainees/Ourtrainees';

function App() {
  // const navigate = useNavigate();

  // const handleLoginNavigation = () => {
  //   navigate('/');
  // };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/technologies" element={<Technology />} /> */}
      
      <Route path="/trainers" element={<Trainer />} />
      <Route path="/our-trainees" element={<Ourtrainees />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/services" element={<Services />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/joining-form" element={<JoiningForm />} />

    </Routes>
  )
}

export default App
