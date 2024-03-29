//import useCounter from "../hooks/use-couter";
import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel"

const reducer = () => {

}


function CounterPage({ initialCount }) {

    // const {count, increment} = useCounter(initialCount)
    // const [count, setCount] = useState(initialCount)
    // const [valueToAdd, setValueToAdd] = useState(0)
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0,
    })

    const increment = () => {
        // setCount(count + 1)
    }

    const decrement = () => {
        // setCount(count - 1)
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0
        // setValueToAdd(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // setCount(count + valueToAdd)
        // setValueToAdd(0)
    }

    return (
        <Panel className={"m-3"}>
            <h1 className="text-2xl">Count is {state.count}</h1>
            <div className="flex flex-row gap-x-3 mt-2">
                <Button onClick={increment}>
                    Increment
                </Button>
                <Button onClick={decrement}>
                    Decrement
                </Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input value={state.valueToAdd || ""} onChange={handleChange} type="number" className="p-2 m-3 bg-slate-50 border border-gray-300" />
                <Button>Add it</Button>
            </form>
        </Panel>)
}

export default CounterPage