import { createContext, useContext } from 'react';
import { theme } from '../constants/theme';


//🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

type ThemeContextProviderProps = {
    children: React.ReactNode
}

//🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩


const ThemeContext = createContext(theme);


const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {

    return (
        <ThemeContext.Provider value={theme}>

            {children}

        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;


// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => useContext(ThemeContext);