import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">
            <img className='footer-logo' src={assets.logo} alt="Company logo" />
            <p>For better experience,download the FoodPanda app now</p>
            <div className="footer-social-icon">
                <img className='facebook-icon' src={assets.facebook_icon} alt="" />
                <img className='twitter-icon' src={assets.twitter_icon} alt="" />
                <img className='linked-icon' src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-right">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Private Policy</li>
            </ul>
        </div>
        <div className="footer-content-center">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-8833-2519-1099</li>
                <li>contact@panda.com</li>
            </ul>
        </div>
    </div>
    <hr />
    <p className="footer-copyright">
        Copyright 2024 © FoodPanda™ Ltd. All rights reserved
    </p>   
    </div>

  )
}

export default Footer
