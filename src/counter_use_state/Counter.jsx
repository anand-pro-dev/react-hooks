import React, { useState, useEffect } from 'react'

const Counter = () => {

    const [count, setcounter] = useState(0)
    const [data, newSetcounter] = useState('stopped')

    useEffect(() => {
        console.log(' Run only for first time with empty arry ');

    }, [count])

    function updateCounter() {
        setcounter(count + 1)
    }
    function updateEffect() {
        newSetcounter('now run agin')
        console.log('run agin')
    }


    return (
        <>
            <div>Counter value is  {count}</div>
            <button onClick={updateCounter}>Update</button>
            <br />
            <button onClick={updateEffect} > updata use effect {data} </button>
        </>
    )
}

export default Counter








// // Simple counter implementation


// import React, { useState } from 'react'

// const Counter = () => {

//     const [count, setcounter] = useState(0)
//     function updateCounter() {
//         setcounter(count + 1)
//     }
//     return (
//         <>
//             <div>Counter value is  {count}</div>
//             <button onClick={updateCounter}>Update</button>
//         </>
//     )
// }

// export default Counter