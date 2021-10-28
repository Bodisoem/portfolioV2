import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there <br/>
        I am Duke Vu
      </SectionTitle>
      <SectionText>
        A Software Engineer who love to work with Cloud technologies and create powerful web applications.
      </SectionText>
      <Button onClick={() => window.location = "https://www.linkedin.com/in/duke-vu/"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;