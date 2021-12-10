import { createContext, ReactNode, useContext, useState } from "react";

interface lettersContextData {
    lettersForMinute: number,
    setLettersForMinute: (value: number) => void,
}

interface lettersProvider {
    children: ReactNode
}

const lettersContext = createContext({} as lettersContextData)

export const LettersProvider = ({ children }: lettersProvider) => {
    const [lettersForMinute, setLettersForMinute] = useState(0);

    return (
        <lettersContext.Provider value={{ lettersForMinute, setLettersForMinute }}>
            {children}
        </lettersContext.Provider>
    )
}

export const useLettersContext = () => {
    const data = useContext(lettersContext)

    return data
}