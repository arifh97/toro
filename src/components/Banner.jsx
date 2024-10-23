import { Container, Row, Col } from './Grid'
import Token from '../components/Token'
export default function Banner() {
  return (
    <div className='banner relative'>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="banner-content text-center">
              <h1>TORO INOUE</h1>
              <p className='p'>Toro Inoue, also known as the Sony Cat, is an iconic character from the Doko Demo Issyo series and the unofficial mascot of Sony Interactive Entertainment in Japan.</p>
              <div className="token">
                <p className='token-header'>Contracts</p>
                <Token/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="shape absolute left-0 -bottom-5 w-full h-[263px]"></div>
    </div>
  )
}
