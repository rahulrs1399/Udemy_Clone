import { createContext } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider(){
    return <AuthContext.Provider value={{}}></AuthContext.Provider>
}