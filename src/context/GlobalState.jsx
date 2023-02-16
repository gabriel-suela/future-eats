import React, { useState } from "react";

import { GlobalContext } from "./GlobalContext";

const GlobalState = ({children}) => {
    const [reload, setReload] = useState(false)
    const [arrayProducts, setArrayProducts] = useState([])

    return (
        <GlobalContext.Provider value={{arrayProducts, setArrayProducts, reload, setReload}}>
            {children}
        </GlobalContext.Provider>
    )
}