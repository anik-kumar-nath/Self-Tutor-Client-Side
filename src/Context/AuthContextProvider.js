import React, { createContext, useState } from 'react';

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    const handleToggleTheme = () => {
        if (theme === 'dark')
            setTheme('light');
        else
            setTheme('dark')
    }
    const AuthInfo = { theme, handleToggleTheme };
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthContextProvider;