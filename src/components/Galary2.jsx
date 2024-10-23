import { Container, Row, Col } from './Grid'
import Img from "../assets/img/galary2img1.png"
import videos from "../assets/img/galary-video.mp4"
import { useRef, useState } from 'react';
import { FaRegCirclePause } from "react-icons/fa6";
import { BsPlayCircleFill } from "react-icons/bs";

import { BsFillPlayFill } from "react-icons/bs";
import { FaPause } from "react-icons/fa6";



export default function Galary() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const videoRef = useRef(null);

  const handleVideoPlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setShowButton(true);
    } else {
      videoRef.current.play();
      setShowButton(false);
    }
    setIsPlaying(!isPlaying);
  };

  const handleMouseEnter = () => {
    if (isPlaying) {
      setShowButton(true);
    }
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowButton(false);
    }
  };

  return (
    <div className='galary2'>
      <Container>
        <Row>
          <Col xs={12} md={5} lg={4} className='mb-5 md:mb-0'>
            <div className="galary2-left w-full border-white border-[2px] lg:border-[3] xl:border-[5px] object-cover">
              <img className='w-full h-full object-cover' src={Img} alt="Gallery" />
            </div>
          </Col>
          <Col xs={12} md={7} lg={8}>
            <div
              className="relative z-[1] galary2-right w-full border-white border-[2px] lg:border-[3] xl:border-[5px]"
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <video ref={videoRef} loop src={videos} className="w-full h-full object-cover"></video>
              {showButton && (
                <button
                  onClick={handleVideoPlayPause}
                  className="absolute border-0 p-0 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-10  rounded-full playBtn"
                >
                  {isPlaying ? < FaPause/> : <BsFillPlayFill />}
                </button>
              )}
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}
