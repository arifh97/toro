import { Container, Row, Col } from './Grid'
import Img from "../assets/img/footer-img.png"
import Img2 from "../assets/img/footerImg.png"
import Social from '../components/Social'

export default function Footer() {
  return (
    <div className='footer'>
      <Container>
        <Row className='items-center justify-between'>
          <Col xs={12} md={7} lg={7} xl={7} className='mb-5 md:MB-0'>
            <div className="footer-text">
              {/* <img className='w-full  lg:w-[758px] h-8 md:h-10 lg:h-12 '  src={Img} alt="" /> */}
              <h2 className='uppercase mb-4'>JOIN THE COMMUNITY</h2>
              <p className=' mt-5 lg:mt-12 xl:mt-[100px] mb-4 lg:mb-10 xl:mb-[70px] text-base md:text-lg lg:text-[22px] text-[#848E9C] font-bold !leading-[180%]'>Join the community and lets show the world who really should be leading the cat meta !</p>
              <div className="flex flex-wrap gap-4">
                <Social />
                <a href="mailto:info@toroinoue.lol" className='flex items-center gap-3 md:gap-5 lg:gap-6 border border-dashed border-white rounded-[10px] py-4 px-5 text-white text-lg md:text-xl lg:text-2xl hover:text-opacity-75 w-full lg:w-auto'>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2092_39)">
                      <path d="M35.58 6.99243C35.58 4.97438 33.9789 3.32324 32.022 3.32324H3.558C1.6011 3.32324 0 4.97438 0 6.99243V29.0076C0 31.0256 1.6011 32.6767 3.558 32.6767H32.022C33.9789 32.6767 35.58 31.0256 35.58 29.0076V6.99243ZM32.022 6.99243L17.79 16.1654L3.558 6.99243H32.022ZM32.022 29.0076H3.558V10.6616L17.79 19.8346L32.022 10.6616V29.0076Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_2092_39">
                        <rect width="35.58" height="35.58" fill="white" transform="translate(0 0.209961)" />
                      </clipPath>
                    </defs>
                  </svg>
                  info@toroinoue.lol
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={5} lg={5} xl={4} xxl={3}>
            <div className='flex md:block items-center justify-center'> <div className="footer-img "><img className='w-full h-full object-contain' src={Img2} alt="" /></div></div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
