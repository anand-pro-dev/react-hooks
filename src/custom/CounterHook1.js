
import CounterHook2 from './CounterHook2.js';
import CustomHook from './CustomHook.js'

const CounterHook1 = () => {

    // const [count, setCount] = useState(0);


    // function Increment() {
    //     setCount(count + 1)
    // }


    // function Decrement() {
    //     setCount(count - 1)
    // }



    const [count, Increment, Decrement] = CustomHook();

    return (
        <>
            <div>CounterHook</div>
            <div>{count}</div>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>

            <br />
            <br />
            <CounterHook2 />

        </>
    )
}

export default CounterHook1