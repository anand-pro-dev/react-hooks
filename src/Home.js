import React from 'react'
import { useNavigate } from 'react-router-dom'
import Counter from './counter_use_state/Counter';
import Lifting from './Childs/Lifting';

const Home = () => {

    const navigation = useNavigate();

    const id = 5;
    function goToAbout() {
        navigation('/about', { state: { id: id } });
    }

    function getLiftingData(data) {
        console.log(data);
    }

    return (

        <>
            <Counter />
            <div>Home</div>
            <button onClick={goToAbout}>About</button>
            <br />
            <br />
            <br />
            <div>Lifting Component</div>     <br />
            <Lifting getLiftingData={getLiftingData} />
        </>
    )
}

export default Home