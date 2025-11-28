import { useEffect } from 'react'
import HeroSection from './sections/Hero.jsx'
import './App.css'
import HeaderComponent from './components/HeaderComponent.jsx'
import Portfolio from './sections/Portfolio.jsx'
import Stack from './sections/Stack.jsx'
import Services from './sections/Services.jsx'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import FooterComponent from './components/FooterComponent.jsx'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


function App() {
  useEffect(() => {
    gsap.ticker.lagSmoothing(0)
    const timeline = gsap.timeline({});

    timeline.to('.hero__content', {
      y: -200,
      scrollTrigger: {
        trigger: '.hero',
        start: 'center center',
        end: 'bottom top',
        scrub: true,
      }
    })
  })
  return (
    <div className="fullpage">
      <HeaderComponent></HeaderComponent>
      <HeroSection />

      {/* <Features></Features> */}
      {/* <About></About> */}
      <Services></Services>
      <Portfolio></Portfolio>
      <Stack></Stack>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default App
