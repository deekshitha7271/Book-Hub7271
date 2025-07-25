import Slider from 'react-slick'
import {useState, useEffect} from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Cookies from 'js-cookie'
import './index.css'
import BeatLoader from 'react-spinners/BeatLoader'
import { Link } from 'react-router'


const Topratedbooks = () => {
    const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1200,
    infinite: true,
    // pauseOnHover: true,
    // pauseOnFocus: true,
   
  
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: null,
          autoplay: null,
          autoplaySpeed: null,
          infinite: null,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: null,
          autoplay: null,
          autoplaySpeed: null,
          infinite: null,
          dots: false
        }
      }
    ]
  }
  const [data, setData] = useState([])
  // console.log("data - value",data)


  useEffect(()=>{
    // console.log(data)
    const getTop = async () => {
        const jwtToken = Cookies.get('jwt_token')
        const url = `https://apis.ccbp.in/book-hub/top-rated-books`;
        const options={
            headers:{
                Authorization: `Bearer ${jwtToken}`,
            },
            method: 'GET',
        }
        const response = await fetch(url, options);
        if(response.ok==true){
            const fetchedData = await response.json();
            // console.log(fetchedData)
            const formattedData = fetchedData.books.map(each=>({
                id: each.id,
                title: each.title,
                authorName: each.author_name,
                coverPic: each.cover_pic

            }))
            setData(formattedData)
            
            
        }


    }
    getTop()
  },[])

  return(
    
        <div>
            <div className="">
              
              
        
      {data.length>0?(
        <>
        
        <div className='slider-container'>
          <div className='find-container'>
          <p className='top-head'>Top Rated Books</p>
          <div className='button-container'>
            <Link to="/bookshelves">
          <button className='find-b'>FindBooks</button>
          </Link>
          </div>
          </div>
        <Slider {...settings}> 
            
          {data.map((each)=>(
            <div className='book-slide' key={each.id}>
              <div className='im-cont'>
            <img src={each.coverPic} alt={each.title} className='image'/>
            </div>
            <div className='details-container'>
            <h1 className='title'>{each.title}</h1>
            <p className='authorName'>{each.authorName}</p>
            </div>
            </div>
          ))}
        
      </Slider>
      </div>
      </>):<div className='beat-loader'><BeatLoader/></div>}
      
    </div>
            
            
        </div>

    );

}
export default Topratedbooks