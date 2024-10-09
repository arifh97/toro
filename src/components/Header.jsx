import { Container } from './Grid'
import logo from '../assets/img/logo.png'


export default function Header() {
  return (
    <div className='header'>
      <Container>
        <div className="header-wrap">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>
      </Container>
    </div>
  )
}
