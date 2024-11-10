import logo from 'dist/assets/images/logo';


export default function Navbar() {
    return (
        <nav>
          <img className='logo' src={logo} />
          
          <h1 className='nav-heading'>recipes</h1>
          
          <ul className='nav-links'>
            <li><a className='nav-link' href="#">recipes</a></li>
            <li><a className='nav-link' href="#">our story</a></li>
            <li><a className='nav-link' href="#">ask us</a></li>
          </ul>

        </nav>
    )
}