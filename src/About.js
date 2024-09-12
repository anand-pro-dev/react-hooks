import React, { useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
    const location = useLocation();
    const refElement = useRef(null); // Create a ref for the input element
    const [name, setName] = useState('name');

    console.log(refElement);

    function reset() {
        setName(''); // Reset the state-controlled input value
        // refElement.current.value = ''; // Also reset the input value via ref
        refElement.current.focus(); //

    }


    /// use me mo hook

    const [add, setAdd] = useState(0);
    const [minu, setMinus] = useState(100);

    const mulitplication = useMemo(function mulitply() {
        console.log('*********************')
        return add * 10
    }, [add])

    // function mulitply() {
    //     console.log('*********************')
    //     return add * 10

    // }

    return (
        <>
            <div>About, My id {location.state?.id ?? 5}</div>
            <br />

            <h1>Learning useRef</h1>
            {/* Attach ref to input and maintain control with useState */}
            <input
                type="text"
                value={name}
                ref={refElement} // Ref attached to the input element
                onChange={(e) => setName(e.target.value)}

            />

            <button onClick={reset}>Reset</button>

            {/* ////................................................................................. */}


            <h1>  Learning useMemo hook  </h1>
            {mulitplication}  <br />
            {/* {mulitply()}  <br /> */}

            <button onClick={() => setAdd(add + 1)} >Addition </button>
            <span>{add}</span>
            <button onClick={() => setMinus(minu - 1)} >Substration </button>
            <span>{minu}</span>

        </>
    );
}

export default About;
