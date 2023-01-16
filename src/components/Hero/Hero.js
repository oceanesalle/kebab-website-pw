import React, {useState} from 'react';
import Navbar from '../Navbar';
import { 
  HeroContainer, 
  HeroContent, 
  HeroItems, 
  HeroH1, 
  HeroP, 
  HeroBtn } from './HeroElements'; 

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <HeroContainer>
      <Navbar toggle={toggle}/>
      <HeroContent>
        <HeroItems>
          <HeroH1>Restauration rapide situé à Voiron</HeroH1>
          <HeroP>The Voiron Grill</HeroP>
          <HeroBtn>Accéder au menu</HeroBtn>
        </HeroItems>
      </HeroContent>

    </HeroContainer>
  )
}

export default Hero