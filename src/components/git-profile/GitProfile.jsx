import React, { useState } from 'react'
import axios from 'axios'

/**https://api.github.com/users/<username> */
export default function GitProfile({ url }) {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState()

    function handleLoadDataButtonClick() {
        setIsLoading(true)
        axios.get(url).then((result) => {
            setData(result.data.login);
            setIsLoading(false);
        }).catch((error) => {
            //handle error
            console.error("Error while fetching data from url ", error)
        })
    }

    return (
        <>
            {data && <p>Hello {data}!</p>}
            {isLoading && <p>Loading...</p>}
            <button title='Load data' onClick={handleLoadDataButtonClick} />
        </>
    )
}
