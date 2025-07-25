import Cookies from 'js-cookie'
import { Navigate } from 'react-router'
const ProtectedRoute = ({children}) => {
    const jwtToken = Cookies.get('jwt_token')
    if(jwtToken==undefined){
        return <Navigate to="/login"/>
    }
    return children


}
export default ProtectedRoute