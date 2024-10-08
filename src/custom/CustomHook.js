

import React, { useState } from 'react'

const CustomHook = (initialValue = 0) => {

    const [count, setCount] = useState(initialValue);


    function Increment() {
        setCount(count + 1)
    }


    function Decrement() {
        setCount(count - 1)
    }

    return [count, Increment, Decrement]
}

export default CustomHook