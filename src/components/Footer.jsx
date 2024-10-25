import { Container, Row, Col } from './Grid'
import Img from "../assets/img/footer-img.png"
import Img2 from "../assets/img/footerImg.png"
import Social from '../components/Social'

export default function Footer() {
  return (
    <div className='footer'>
      <Container>
        <Row className='items-center justify-between'>
           <Col xs={12} md={7}  lg={7} xl={7} className='mb-5 md:MB-0'>
             <div className="footer-text">
              {/* <img className='w-full  lg:w-[758px] h-8 md:h-10 lg:h-12 '  src={Img} alt="" /> */}
              <h2 className='uppercase mb-4'>JOIN THE COMMUNITY</h2>
              <p className=' mt-5 lg:mt-12 xl:mt-[100px] mb-4 lg:mb-10 xl:mb-[70px] text-base md:text-lg lg:text-[22px] text-[#848E9C] font-bold !leading-[180%]'>Join the community and lets show the world who really should be leading the cat meta !</p>
              <Social/>
             </div>
           </Col>
           <Col xs={12} md={5} lg={5} xl={4} xxl={3}>
             <div className='flex md:block items-center justify-center'> <div className="footer-img "><img  className='w-full h-full object-contain' src={Img2} alt="" /></div></div>
           </Col>
        </Row>
      </Container>
    </div>
  )
}
