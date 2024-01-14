import { useState } from "react"
import { BsFillCaretDownFill } from "react-icons/bs";

const Accordion = ({ data }) => {
    const [expectedIndex, setIndex] = useState(-1)

    // Variation of Event Handler (This will be passed in the onClick)
    const showContent = (nextIndex) => {
        setIndex((currExpectedIndex) => {
            if (currExpectedIndex === nextIndex) {
                return -1
            } else {
                return nextIndex
            }
        })
    }

    const renderedItems = data.map((d, index) => {

        const selectedSection = expectedIndex === index

        const content = selectedSection && <div className="border-b p-5 transition-transform duration-500">{d.content}</div>
        const icon = <span className={`text-xl transition-transform duration-500 ${selectedSection ? 'rotate-90' : 'rotate-0'}`}>
            {/* {selectedSection ? <BsFillCaretLeftFill /> : <BsFillCaretDownFill />} */}
            <BsFillCaretDownFill />
        </span>
        return (
            <div className="container mx-auto" key={d.id}>
                <div className="flex justify-between items-center p-3 bg-gray-50 border-b cursor-pointer" onClick={() => showContent(index)}>
                    {d.label}
                    {icon}
                </div>
                {/* <div onClick={showContent}>{d.label}</div> */}
                {/* <div onClick={() => setIndex(index)}>{d.label}</div>  Best approach if is a one line event handler */}
                {/* {selectedSection ? <div>{d.content}</div> : <div></div>} */}
                {content}
            </div>)
    })
    return <div className="border-x border-t rounded">{renderedItems}</div>
}

export default Accordion