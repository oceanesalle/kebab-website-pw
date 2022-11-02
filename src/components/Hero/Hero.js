import React from 'react';
import Navbar from '../Navbar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'; 

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar/>
      <HeroContent>
        <HeroItems>
          <HeroH1>venenatis tellus in metus</HeroH1>
          <HeroP>venenatis tellus in metus</HeroP>
          <HeroBtn>venenatis tellus in metus</HeroBtn>
        </HeroItems>
      </HeroContent>

    </HeroContainer>
  )
}

export default Hero