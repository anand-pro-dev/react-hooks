
import CustomHook from './CustomHook.js'

const CounterHook2 = () => {

    const [count, Increment, Decrement] = CustomHook(10);

    return (
        <>
            <div>CounterHook</div>
            <div>{count}</div>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>

        </>
    )
}

export default CounterHook2