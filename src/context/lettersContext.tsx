import { createContext, ReactNode, useContext } from "react";

interface lettersContextData {
    lettersForMinute: number
}

interface lettersProvider {
    children: ReactNode
}

const lettersContext = createContext({} as lettersContextData)

export const LettersProvider = ({ children }: lettersProvider) => {
    const lettersForMinute = 0;

    return (
        <lettersContext.Provider value={{ lettersForMinute }}>
            {children}
        </lettersContext.Provider>
    )
}

export const useLettersContext = () => {
    const data = useContext(lettersContext)

    return data
}