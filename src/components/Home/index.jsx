import Header from "../Header";
import Topratedbooks from "../Topratedbooks";
import Contact from "../Contact";
import { Link } from "react-router";
import './index.css';
const Home = () => {
    return(
        <div className="bg-cont">
            <div>
            <Header/>
            </div>
            <div className="home-cont">
                <div className="des">
            <h1 className="head">Find Your Next Favorite Books?</h1>
            <p className="paragraph">You are in the right place. Tell us what titles or genres you have enjoyed in the past, and we will give you surprisingly insightful recommendations.</p>
                <div className='button-container-mobile'>
                    <Link to="/bookshelves">
                        <button className='find-a'>FindBooks</button>
                    </Link>
                </div>
            </div>
            <Topratedbooks/>
            <Contact/>
            </div>
            
            
            
        </div>
    );

}
export default Home