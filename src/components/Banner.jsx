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
              <p className='p'>Degen Toro Inoue (井上トロ), also known as Toro (トロ) and the Sony Cat, has one wish—to become human. In his latest adventure, he’s embraced his degenerate side on the blockchain, diving into the world of meme coins in a final attempt to achieve his dream.</p>
              {/* <div className="token">
                <p className='token-header'>Contracts</p>
                <Token/>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
      <div className="shape absolute left-0 -bottom-5 w-full h-[263px]"></div>
    </div>
  )
}
