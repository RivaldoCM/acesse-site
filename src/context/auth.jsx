import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const SignIn = async ({ email, password }) => {

    }

    return(
        <AuthContext.Provider value={{}}>
            { children }
        </AuthContext.Provider>
    )
}