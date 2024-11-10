import logo from '../images/logo.png'
import fb from '../images/fb.png'
import twitter from '../images/twitter.png'
import insta from '../images/instagram.png'
import Attribution from './Attribution'

export default function Footer() {

    return (
        <footer>

          <div className='actual-footer'>

           <div className='footer-group'>
            <p>follow us for more!</p>
            
            <ul className='socials'>
              <li><a className='social-icon' href="#">
                <img src={fb} alt="" /></a></li>

              <li><a className='social-icon' href="#">
                <img src={twitter} alt="" /></a></li>
              
              <li><a className='social-icon' href="#">
                <img src={insta} alt="" /></a></li>
            </ul>
           </div>

           <img className='footer-logo' src={logo} alt="logo" />

           <p className='motto'>inspiring motto of the brand</p>
        </div>
        
           <Attribution />
        </footer>
    )
}