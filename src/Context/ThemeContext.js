import { createContext, useState } from "react";

export const ThemeContext = createContext()
export const ThemeProvider = ({children}) =>{
    const [mode, setMode] = useState('light')
    const toggle = () =>{
        setMode(x => (x === 'dark' ? 'light' : 'dark'))
    }
    return (
        <ThemeContext.Provider value={{toggle, mode}}>
            <div className={`them ${mode}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}