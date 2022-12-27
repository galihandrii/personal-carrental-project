import "./Footer.css"
import facebook from "../assets/icon_facebook.png"
import twitter from "../assets/icon_twitter.png"
import twitch from "../assets/icon_twitch.png"
import mail from "../assets/icon_mail.png"
import instagram from "../assets/icon_instagram.png"


const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer1">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div className="footer2">
                   <ul>
                    <li> <a href="#ourservice">Our Service</a></li>
                    <li><a href="#whyus">Why Us</a></li>
                    <li> <a href="#testimonial">Testimonial</a></li>
                    <li><a href="#faq">FAQ</a></li>
                   </ul>
                </div>
                <div className="footer3">
                    <div className="footer3-top">
                        <p>Connect With Us</p>
                    </div>
                    <div className="footer3-bottom">
                        <div className=" icon"><img className="facebook" src={facebook}/></div>
                        <div className=" icon"><img className="instagram" src={instagram}/></div>
                        <div className="icon"><img className="twitter" src={twitter}/></div>
                        <div className=" icon"><img className="mail" src={mail}/></div>
                        <div className=" icon"><img className="twitch" src={twitch}/></div>
                    </div>
                </div>
                <div className="footer4">
                    <p>Copyright Binar 2022</p>
                    <p>binar</p>
                </div>
            </div>
        </div>
    );
};
export default Footer;