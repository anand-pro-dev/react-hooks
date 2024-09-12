import React, { memo, useRef } from 'react'

function ChildA({ Learning, count }) {

    console.log('Child');


    const refObject = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(refObject.current.value);

    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <div>ChildA</div>
                <br />
                <label>Learning Ref</label>
                <h2> UnControlledd Component</h2>
                <input type="text" ref={refObject} />  <br />
                <button>Submit</button>
            </form>
        </>
    )
}

export default memo(ChildA);