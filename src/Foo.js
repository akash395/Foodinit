import React, { useState, useEffect } from 'react'

function Foo() {
    const [initialData, setInitialData] = useState ([{}])

    useEffect(() => {
        fetch ('/user').then (
            response => response.json()
        ).then (data => setInitialData(data))
    }, [])
    return (
        <div>
            <h1>{initialData.message}</h1>
        </div>
    )
}

export default Foo
