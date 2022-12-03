import {navigate} from "gatsby";

const LOCAL_STORAGE_KEY = process.env.LOCAL_TOKEN

class Auth {

/**
 * const user = {
            name: "NickName"
    }
 */
    isLogined = () => {
        //true | false
        const data = typeof window !== 'undefined' && localStorage.getItem(LOCAL_STORAGE_KEY)
        if (data) {
            // try {
            //     const user = JSON.parse(data);
            //     if (user && user.name)
            //     return true
            // } catch {
            //     this.logout()
            // }

            return true

            
        }

        return false


    }

    saveUser = (user) => {
        typeof window !== 'undefined' && localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user))
    }

    logout = () => {
        if(typeof window !== 'undefined') {
            localStorage.removeItem(LOCAL_STORAGE_KEY)
            navigate('/login')
        }

    }

    localStoreClear = () => {
        typeof window !== 'undefined' && localStorage.clear()
    }
}

export const instanceAuthService = new Auth();