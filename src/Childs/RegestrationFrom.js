import React, { memo, useRef } from 'react'

function RegestrationFrom() {


    console.log('Regestration from');


    const refObject = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(refObject.current.value);

    }



    return (
        <>
            <div>RegestrationFrom</div>

            <>
                <form onSubmit={handleSubmit} >

                    <br />
                    <label>Learning Ref</label>
                    <h2> UnControlled Component</h2>
                    <input type="text" ref={refObject} />  <br />
                    <button>Submit</button>
                </form>
            </>

        </>
    )
}

export default RegestrationFrom