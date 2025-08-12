import './index.css'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { Navigate, useNavigate } from 'react-router'
const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()
  const onChangeUserName = (event) => {
    setUserName(event.target.value)
  }
  const onChangePassword = (event) =>{
    setPassword(event.target.value)
  }
  const onSubmitFailure = (error_msg) =>{
    setErrorMsg(error_msg)

  }
  
  const onSubmitSuccess = (jwtToken) => {
    Cookies.set('jwt_token', jwtToken, {expires:30})
    navigate('/', {replace:true})
  }
  const submitForm = async event  => {
    event.preventDefault()
    const userDetails = {username:userName, password:password}
    const url = 'https://apis.ccbp.inlogin';
    const options={
      method: 'POST',
      
  headers: {
    
    'Content-Type': 'application/json',
  },
      body: JSON.stringify(userDetails)
    }
    const response = await fetch(url, options)
    // console.log(data)
    if(response.ok===true){
          const data = await response.json()

      onSubmitSuccess(data.jwt_token)
    }
    else{
      
      onSubmitFailure(response.error_msg)
    }
    const jwtToken = Cookies.get('jwt_token')
    if(jwtToken!==undefined){
      <Navigate to="/"/>

    }

  }
  return (
    <div className="login-block">
      <div className="image-block">
        <img
          src="https://res.cloudinary.com/dqxhjnhrt/image/upload/v1752118249/Rectangle_1467_1_rmereb.png"
          className="form-img"
        />
      </div>
      <div className="login-inner">
        <form className='form' onSubmit={submitForm}>
          {/* <div> */}
          <div className="heading-cont">
            <img
              src="https://res.cloudinary.com/dqxhjnhrt/image/upload/v1752118688/Group_7730_gl7f6c.png"
              className="logo-img"
            />
            <h1 className="main-h">ook Hub</h1>
          </div>
          <div className='username-div'>
          <label htmlFor="userName*" className="userName-label">
            Username*
          </label>
          <input id="userName" className="userName-input" onChange={onChangeUserName} value={userName}></input>
          </div>
          <div className='password-div'>
          <label htmlFor="passWord" className="password-label">
            Password*
          </label>
          <input id="password" className="password-input" onChange={onChangePassword} value={password}  type="password"></input>
          </div>
          <button className='login-button'>login</button>
          {/* </div> */}
          <p>{errorMsg}</p>
        </form>
      </div>
    </div>
  )
}
export default Login
