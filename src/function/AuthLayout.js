import { instanceAuthService } from './auth'
import { navigate } from 'gatsby'

export const AuthLayout = ({children, logIn, logInGo}) => {

    if (!instanceAuthService.isLogined()){
        // navigate('/sign-in')
        // return null
    }

    if ( logIn === 'none' ) {

    }

    if ( instanceAuthService.isLogined() === logIn ) {

        if ( typeof window !== "undefined" ) {
            navigate('/' + logInGo + '/')
        }
        return null
    }

    return children
}