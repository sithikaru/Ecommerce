'use client'

import { createContext } from "react";



export const Globalcontext = createContext(null);


export default function Globalstate({children}) {
    return <Globalcontext.Provider value={{}}>{children}</Globalcontext.Provider>
}
