'use client'

import { createContext, useState } from "react";



export const Globalcontext = createContext(null);


export default function Globalstate({ children }) {
    const [showNavModal, setshowNavModal] = useState(false)
    return <Globalcontext.Provider value={{ showNavModal, setshowNavModal }}>{children}</Globalcontext.Provider>
}
