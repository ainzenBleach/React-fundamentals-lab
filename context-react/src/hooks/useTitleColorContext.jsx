import {useContext } from "react";
import { TitleColorContext } from "../context/titleColorContext";

export const useTitleColorContext = () => {
    const context = useContext(TitleColorContext)

    if(!context){
        console.log("Context not found")
    }

    return context
}