import { Container, Row, Col } from './Grid'
import Img from "../assets/img/galary1.png"
import Img2 from "../assets/img/galary2.png"

export default function Galary() {
  return (
    <div className='galary mb-8 lg:mb-10'>
        <Container>
            <Row>
                <Col xs={12} md={6} lg={8}>
                    <div className="galary-left w-full  border-white border-[2px] lg:border-[3] xl:border-[5px] "> <img  className='w-full h-full object-cover ' src={Img} alt="" /></div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                <div className="galary-right w-full  border-white border-[2px] lg:border-[3] xl:border-[5px] "> <img  className='w-full h-full object-cover ' src={Img2} alt="" /></div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
