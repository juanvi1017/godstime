
import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { post } from '../apirest'

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        if (localStorage.getItem("tokens")) {
            let tokens = JSON.parse(localStorage.getItem("tokens"));
            return jwt_decode(tokens.token);
        }
        return null;
    });

    const login = async (payload) => {
        const response = await post(
            "login",
            payload
        )
        if (response.status === 200) {
            localStorage.setItem("tokens", JSON.stringify(response.data));
            setUser(jwt_decode(response.data.token));
            return response;
        }
        else {
            return response;
        };
    };
    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;