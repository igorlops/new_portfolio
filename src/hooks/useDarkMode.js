import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useDarkMode = () => {
    const context = useContext(ThemeContext)

    if(!context) {
        console.log("Contexto não encontrado")
    }
    return context
}