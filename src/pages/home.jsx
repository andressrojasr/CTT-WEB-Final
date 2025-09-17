import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/header';
import Nav from '../components/nav';
import Hero from '../components/hero';
import Stats from '../components/stats';
import CourseSection from '../components/CourseSection';
import Footer from '../components/footer';
import Banner from '../components/banner';
import Carrusel from '../components/carrussel';
import BannerImage from '../components/BannerImage';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, [Footer]);

  return (
    <div>
      <Header/>
      <Nav/>
      <Hero/>
      <BannerImage/>
      <Banner/>
      <Stats/>
      <CourseSection/>
      <Carrusel/>
      <Footer/>
    </div>
  );
}
