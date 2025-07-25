import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './index.css'

const Contact = () => (
    <div className="full-cont">
        <div  className="contact-cont">
        <FaGoogle />
        <FaTwitter />
        <FaInstagram />
        <FaYoutube />
        </div>
        <div>
            <p className="contact-p">Contact Us</p></div>
    </div>

)
export default Contact