import { Link } from "react-router"
import './index.css'
const NotFound = () => (
    <div className="notfound-cont">
        <img src="https://res.cloudinary.com/dqxhjnhrt/image/upload/v1752320817/Group_7484_urgq3b.png" className="NotFound-Image"/>
        <h1 className="notfound-head">Page Not Found</h1>
        <p className="notfound-para">we are sorry, the page you requested could not be found,Please go back to the homepage.</p>
        <Link to="/">
        <div className="b-cont">
        <button className="button">Go Back To Home</button>
        </div>
        </Link>
    </div>
)
export default NotFound