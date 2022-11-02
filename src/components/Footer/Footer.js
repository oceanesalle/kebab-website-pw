import React from 'react';
import {
  FaFacebook, 
  FaInstagram
} from 'react-icons/fa';

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Eget gravida cum</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label="facebook" rel="noopener noreferrer"> <FaFacebook /></SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label="instagram" rel="noopener noreferrer"><FaInstagram/></SocialIconLink>
        
              
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer