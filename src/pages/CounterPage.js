import useCounter from "../hooks/use-couter";
import Button from "../components/Button";


function CounterPage({ initialCount }) {

    const {count, increment} = useCounter(initialCount)

    return <div>
        <h1>Count is {count}</h1>
        <Button onClick={increment}>
            Click Me
        </Button>
    </div>
}

export default CounterPage