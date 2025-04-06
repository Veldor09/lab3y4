// 3. crear un consumer



import React, { createContext, useState} from "react";
import { useUserState } from '../Hooks/useUserState'

// 1. crear contexto
export const AuthContext = createContext();


// 2. crear provider
export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const { login } = useUserState();


    const logout = () => {
        setUser(null);
      }

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}