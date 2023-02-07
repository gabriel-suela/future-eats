import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";


const Feed = () => {

    useProtectedPage()

    return(
        <>Feed</>
    )
}

export default Feed