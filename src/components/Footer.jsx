import { Container, Row, Col } from './Grid'

export default function Footer() {
  return (
    <div className='footer'>
      <Container>
        <Row>
           <Col xs={12} md={6} lg={8}>
           </Col>
           <Col xs={12} md={6} lg={4}>
           </Col>
        </Row>
      </Container>
    </div>
  )
}
