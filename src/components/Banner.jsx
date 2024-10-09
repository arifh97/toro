import { Container, Row, Col } from './Grid'

export default function Banner() {
  return (
    <div className='banner'>
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
    </div>
  )
}
