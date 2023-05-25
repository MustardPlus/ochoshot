"use client"
import LinkBarGroup from '@components/LinkBarGroup';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { ParallaxProvider } from 'react-scroll-parallax';

const Home = () => {
  return (
    <div className="wrapper">
      <ParallaxProvider>
      <Header>
      </Header>
      </ParallaxProvider>
      <LinkBarGroup lefty={["instagram", "https://www.instagram.com/ocho.shot/","cY", "ico_insta"]} righty={["optoutall", "https://www.optoutall.net", "cY", "ico_ooa"]} />
      
      <Footer />
    </div>
  )
};
export default Home;