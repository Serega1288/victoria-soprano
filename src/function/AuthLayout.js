import { instanceAuthService } from './auth'
import { navigate } from 'gatsby'

export const AuthLayout = ({children}) => {

    if (!instanceAuthService.isLogined()){
        navigate('/login')
        return null
    }

    return children
}