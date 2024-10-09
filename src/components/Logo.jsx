import logo from '../assets/img/logo.png'

export default function Logo() {
  return (
    <a href='/' className="logo block cursor-pointer">
        <img src={logo} alt="site-logo" />
    </a>
  )
}
