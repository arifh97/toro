import { Container, Row, Col } from './Grid'

export default function Banner() {
  return (
    <div className='banner relative'>
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <div className="banner-content text-center">
              <h1>TORO INOUE</h1>
              <p>Contracts</p>
              <span></span>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="shape absolute left-0 -bottom-5 w-full h-[263px]"></div>
    </div>
  )
}
