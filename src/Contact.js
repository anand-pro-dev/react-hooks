import React, { useCallback, useState } from 'react'
import ChildA from './Childs/ChildA'

function Contact() {

    const [add, setAdd] = useState(0);
    const [count, setCount] = useState(0);

    const Learning = useCallback(() => {
        // some operation 
    }, [count]);


    return (

        <>


            <div>Contact</div>
            <h1> Learn useCallback hook</h1>
            <ChildA Learning={Learning} count={count} />
            <h1>{add}</h1>
            <button onClick={() => setAdd(add + 1)} >Addition </button>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)} >Addition </button>
        </>

    )
}

export default Contact