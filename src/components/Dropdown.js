import { useState, useEffect, useRef } from "react"
import { AiOutlineCaretDown } from "react-icons/ai";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
    const [showOptions, setShowOptions] = useState(false)
    const divEl = useRef()

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }
            if (!divEl.current.contains(event.target)) {
                setShowOptions(false)
            }
        }
        document.addEventListener("click", handler, true)

        return () => {
            document.removeEventListener("click", handler)
        }
    }, [])

    const showHandler = () => {
        setShowOptions((currentOptionsViz) => !currentOptionsViz)
        // or
        // setShowOptions(!showOptions)
        // or
        // if (showOptions) {
        //     setShowOptions(false)
        // } else {
        //     setShowOptions(true)
        // }
    }

    const setSelectionHandler = (option) => {
        console.log(option)
        setShowOptions(false)
        onChange(option)
    }

    const dropdownContent = options.map((option) => {
        return (<div className="hover:bg-sky-100 rounded p-1 cursor-pointer" onClick={() => {
            setSelectionHandler(option)
        }} key={option.id}>{option.label}</div>)
    })

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={showHandler}>
                {value?.label || "Select..."}
                <span className="ms-3 cursor-pointer text-lg"><AiOutlineCaretDown /></span>
            </Panel>
            {showOptions && <Panel className="absolute top-full ">{dropdownContent}</Panel>}
        </div>
    )
}

export default Dropdown