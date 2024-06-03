//import useCounter from "../hooks/use-couter";
import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel"
import { produce } from 'immer'

const INCREMENT_COUNT = 'increment-count';
const SET_VALUE_TO_ADD = 'change_value_to_add'
const DECREMENT_COUNT = "decrement_count"
const SUBMIT_VALUE_TO_ADD = 'submit_value_to_add'



const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            // return {
            //     ...state,
            //     count: state.count + 1
            // }
            state.count = state.count + 1
            return
        case DECREMENT_COUNT:
            // return {
            //     ...state,
            //     count: state.count - 1
            // }
            state.count = state.count - 1
            return
        case SUBMIT_VALUE_TO_ADD:
            // return {
            //     ...state,
            //     count: state.count + state.valueToAdd,
            //     valueToAdd: 0
            // }
            state.count = state.count + state.valueToAdd
            state.valueToAdd = 0
            return
        case SET_VALUE_TO_ADD:
            // return {
            //     ...state,
            //     valueToAdd: action.payload
            // }
            state.valueToAdd = action.payload
            return
        default:
            // throw new Error('Unexpected action type: ' + action.type)
            return
    }


    // if (action.type === INCREMENT_COUNT) {
    //     return {
    //         ...state,
    //         count: state.count + 1
    //     }
    // }

    // if (action.type === SET_VALUE_TO_ADD) {
    //     return {
    //         ...state,
    //         valueToAdd: action.payload
    //     }
    // }
}


function CounterPage({ initialCount }) {

    // const {count, increment} = useCounter(initialCount)
    // const [count, setCount] = useState(initialCount)
    // const [valueToAdd, setValueToAdd] = useState(0)
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0,
    })

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT
        })
    }

    const decrement = () => {
        // setCount(count - 1)
        dispatch({
            type: DECREMENT_COUNT
        })
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0
        // setValueToAdd(value)

        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        dispatch({
            type: SUBMIT_VALUE_TO_ADD
        })
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