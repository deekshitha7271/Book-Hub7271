import './index.css'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Cookies from 'js-cookie'
import { TailSpin } from 'react-loader-spinner'
import Header from '../Header'
const Bookdetails = () => {
    const apiStatusConstants = {
        initial:'INITIAL',
        success: 'SUCCESS',
        failure: 'FAILURE',
        inProgress: 'IN_PROGRESS'
    }
    const {id} = useParams()
    const [apiResponse, setApiResponse] = useState({
        status:apiStatusConstants.initial,
        data:null,
        errorMsg:null
    })
    useEffect(()=>{
       const getBookDetails = async () =>{
        setApiResponse(prev=>({
                ...prev,
                status:apiStatusConstants.inProgress,
                data:null
            }))
        const jwtToken = Cookies.get('jwt_token')
        const url = `https://apis.ccbp.in/book-hub/books/${id}`
        console.log(url)
        const options = {
            headers:{
                Authorization: `Bearer ${jwtToken}`
            },
            method:'GET',
            
        }
        const response = await fetch(url,options)
        if(response.ok==true){
            const fetchedData = await response.json()
            // console.log(fetchedData)
            const book = fetchedData.book_details
            const formattedData = {
                aboutAuthor:book.about_author,
                aboutBook: book.about_book,
                authorName: book.author_name,
                coverPic: book.cover_pic,
                id: book.id,
                rating: book.rating,
                readStatus: book.read_status,
                title: book.title
            }
            console.log(formattedData)
            setApiResponse(prev=>({
                ...prev,
                status:apiStatusConstants.success,
                data:formattedData
            }))
        }
        else{
            setApiResponse(prev=>({
                ...prev,
                status:apiStatusConstants.failure,

            }))
        }

       }
       getBookDetails()
    },[])
    const renderBooksView = () => {
        const {data} = apiResponse
        return(
            <div className='bg-container'>
                <Header/>
        <div className='details-card'>
            <div className='upper'>
                <div>
                <img src={data.coverPic} className='cover-pic'/>
                </div>
                <div>
                    <h1 className='detail-title'>{data.title}</h1>
                    <h1 className='detail-authorName'>{data.authorName}</h1>
                    <h1 className='detail-rating'>Avg Rating <span className='star-img'><img src="https://res.cloudinary.com/dqxhjnhrt/image/upload/v1752370960/Icon_cocjoa.png"/></span><span className='real-data-rating'>{data.rating}</span></h1>
                    <h1 className='detail-status'>Status: <span className='detail-status-real'>{data.readStatus}</span></h1>
                    
                </div>
            </div>
            <hr/>
            <div className='lower'>
                <h1 className='static-about-author'>About Author</h1>
                <p className='dynamic-about-author'>{data.aboutAuthor}</p>
                <h1 className='static-about-book'>About Book</h1>
                <p className='dynamic-about-book'>{data.aboutBook}</p>
            </div>
            
        </div>
        </div>
        )
    }
    const renderLoadingView = () => {
        return(
            <div className="load">
            
            <div className="loader-container" data-testid="loader">
                <TailSpin height={50} width={50} color="#0284C7" />
            </div>
            </div>)

    }
    const renderFailureView = () => {
        return(<div>
            <img src="https://res.cloudinary.com/dqxhjnhrt/image/upload/v1752372175/Group_7522_iwvq1j.png" className="went-wrong-img"/>
            <h1 className="went-wrong-head">Something went wrong, Please try again.</h1>
            <button className="went-wrong-button">Try Again</button>
        </div>)
    }
    const renderAllBooksViews = () => {
        const {status} = apiResponse
        switch(status){
            case apiStatusConstants.success:
                return renderBooksView()
            case apiStatusConstants.failure:
                return renderFailureView()
            case apiStatusConstants.inProgress:
                return renderLoadingView()
            default:
                return null
        }
    
    }
    return(
        <div>
            {renderAllBooksViews()}
        </div>
    )

}
export default Bookdetails