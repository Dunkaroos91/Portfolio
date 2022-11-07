import React, {useState} from 'react';
import Video from '../../videos/video2.mp4'
import {Button} from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted playsInline src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Coleman's Portfolio</HeroH1>
            <HeroP>
                WELCOME
            </HeroP>
            <HeroBtnWrapper>
                <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover}
                primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection