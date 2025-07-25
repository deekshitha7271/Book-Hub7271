import './index.css'
import { Link } from 'react-router'
const BookCard = (props) => {
    const {books} = props
    const {authorName, coverPic, rating,id, readStatus, title} = books
    return(
        <Link to={`/books/${id}`}>
        <div className='bookCard'>
            <div className='in-img-cont'>
            <img src={coverPic} className='in-img'/>
            </div>
            <div className='in-des-cont'>
                <h1 className="in-title">{title}</h1>
                <p className="in-author">{authorName}</p>
                
                <p className="in-rating">Avg Rating<span><img src="https://res.cloudinary.com/dqxhjnhrt/image/upload/v1752370960/Icon_cocjoa.png" className="in-star"/></span><span className="in-rating-value">{rating}</span></p>
                
                
                
                <p className="in-status">Status: <span className='in-status-value'>{readStatus}</span></p>
            </div>
        </div>
        </Link>
    )

}
export default BookCard