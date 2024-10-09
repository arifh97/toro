import { Container, Row, Col } from './Grid'
import Img from "../assets/img/footer-img.png"
import Img2 from "../assets/img/footerImg.png"

export default function Footer() {
  return (
    <div className='footer'>
      <Container>
        <Row className='items-center justify-between'>
           <Col xs={12} md={6} lg={7}>
             <div className="footer-text">
              <img className='w-[758px] h-12 '  src={Img} alt="" />
              <p className=' mt-[100px] mb-[70px] text-base md:text-lg lg:text-[22px] text-[#848E9C] font-bold !leading-[180%]'>Join the community and lets show the world who really should be leading the cat meta !</p>
             </div>
           </Col>
           <Col xs={12} md={6} lg={3}>
             <div className="footer-img w-[294px] h-[527px]"><img  className='w-full h-full object-contain' src={Img2} alt="" /></div>
           </Col>
        </Row>
      </Container>
    </div>
  )
}
