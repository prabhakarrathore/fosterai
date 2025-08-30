import Navbar from '../../components/Navbar'
import Technologies from '../../components/Technologies'
import Footer from '../../components/Footer'
import AboutUs from '../../components/About'
import HomeService from '../../components/HomeService'
import Services from '../../components/Services'
import Courses from '../../components/Courses'
import Contact from '../../components/Contact'
import Intern from '../../components/Intern'
import Teams from '../../components/Teams'
import HomeHeader from '../../components/HomeHeader'

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <HomeHeader />
      <HomeService />
      <AboutUs />
      <Services />
      <Courses />
      <Technologies />
      <Teams />
      <Intern />
      <Contact />
      <Footer />
      {/* <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a> */}
    </div>
  )
}

export default Home