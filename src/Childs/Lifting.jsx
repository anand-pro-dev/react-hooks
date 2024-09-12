import React, { useState } from 'react'

const Lifting = (props) => {

    const [name, setName,] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        props.getLiftingData(name)
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>

                    <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} ></input>
                    <button type='submit'> Submit</button>

                </form>

            </div>

        </>
    )
}

export default Lifting