import React, { useCallback, useState } from "react";
import {
  Arrowforward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./styles";
import Video from "@data/videos/video.mp4";
import { Button } from "@components/Button";

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = useCallback(() => {
    setHover((prev) => !prev);
  }, []);
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} />
        </HeroBg>
        <HeroContent>
          <HeroH1>Virtual Banking made Easy</HeroH1>
          <HeroP>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary={true}
              dark={true}
            >
              Get started {hover ? <Arrowforward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
}

export default HeroSection;
