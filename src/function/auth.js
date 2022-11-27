const LOCAL_STORAGE_KEY = 'user'

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
            try {
                const user = JSON.parse(data);
                if (user && user.name)
                return true
            } catch {
                this.logout()
            }

            
        }

        return false


    }

    saveUser = (user) => {
        typeof window !== 'undefined' && localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user))
    }

    logout = () => {
        typeof window !== 'undefined' && localStorage.removeItem(LOCAL_STORAGE_KEY)
    }
}

export const instanceAuthService = new Auth();