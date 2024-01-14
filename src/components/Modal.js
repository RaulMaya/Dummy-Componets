import ReactDOM from "react-dom"
import { useEffect } from "react"

function Modal({ modalHandler, children, declineBtn, acceptBtn }) {
    useEffect(() => {
        document.body.classList.add('overflow-hidden')
        return () => {
            document.body.classList.remove('overflow-hidden')
        };
    }, [])

    return ReactDOM.createPortal(
        <div>
            <div onClick={modalHandler} className="fixed inset-0 bg-gray-300 opacity-80"></div>
            <div className="fixed inset-40 p-10 bg-white max-w-lg mx-auto overflow-auto">
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex flex-wrap justify-end gap-x-4">
                        {declineBtn}
                        {acceptBtn}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    )
}

export default Modal