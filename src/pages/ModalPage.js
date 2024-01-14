import { useState } from "react"
import Modal from "../components/Modal"
import Button from "../components/Button"

function ModalPage() {
    const [showModal, setShowModal] = useState(false)

    const clickHandler = () => {
        setShowModal(!showModal)
    }

    const declineBtn = <Button onClick={clickHandler} danger>Decline</Button>
    const acceptBtn = <Button onClick={clickHandler} success>Accept</Button>

    const modal = <Modal modalHandler={clickHandler} declineBtn={declineBtn} acceptBtn={acceptBtn}>
        <p>Here is an important agreement for you to accept</p>
    </Modal>
    return (
        <div>
            <Button onClick={clickHandler} primary>Open Modal</Button>
            {showModal && modal}
            {/* <Modal status={showModal} /> */}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et quam pulvinar, dignissim massa in, consequat elit. Mauris in elementum ex. Etiam quis pretium felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ante erat, et viverra ipsum fermentum tempus. Praesent vel bibendum neque, a ornare elit. Vestibulum dapibus semper accumsan. Praesent egestas hendrerit velit. Sed justo arcu, vehicula eget suscipit a, elementum at turpis. Ut pellentesque libero sit amet molestie ullamcorper. Cras pulvinar ante sit amet enim fermentum volutpat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et quam pulvinar, dignissim massa in, consequat elit. Mauris in elementum ex. Etiam quis pretium felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ante erat, et viverra ipsum fermentum tempus. Praesent vel bibendum neque, a ornare elit. Vestibulum dapibus semper accumsan. Praesent egestas hendrerit velit. Sed justo arcu, vehicula eget suscipit a, elementum at turpis. Ut pellentesque libero sit amet molestie ullamcorper. Cras pulvinar ante sit amet enim fermentum volutpat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et quam pulvinar, dignissim massa in, consequat elit. Mauris in elementum ex. Etiam quis pretium felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ante erat, et viverra ipsum fermentum tempus. Praesent vel bibendum neque, a ornare elit. Vestibulum dapibus semper accumsan. Praesent egestas hendrerit velit. Sed justo arcu, vehicula eget suscipit a, elementum at turpis. Ut pellentesque libero sit amet molestie ullamcorper. Cras pulvinar ante sit amet enim fermentum volutpat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et quam pulvinar, dignissim massa in, consequat elit. Mauris in elementum ex. Etiam quis pretium felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ante erat, et viverra ipsum fermentum tempus. Praesent vel bibendum neque, a ornare elit. Vestibulum dapibus semper accumsan. Praesent egestas hendrerit velit. Sed justo arcu, vehicula eget suscipit a, elementum at turpis. Ut pellentesque libero sit amet molestie ullamcorper. Cras pulvinar ante sit amet enim fermentum volutpat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et quam pulvinar, dignissim massa in, consequat elit. Mauris in elementum ex. Etiam quis pretium felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ante erat, et viverra ipsum fermentum tempus. Praesent vel bibendum neque, a ornare elit. Vestibulum dapibus semper accumsan. Praesent egestas hendrerit velit. Sed justo arcu, vehicula eget suscipit a, elementum at turpis. Ut pellentesque libero sit amet molestie ullamcorper. Cras pulvinar ante sit amet enim fermentum volutpat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et quam pulvinar, dignissim massa in, consequat elit. Mauris in elementum ex. Etiam quis pretium felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ante erat, et viverra ipsum fermentum tempus. Praesent vel bibendum neque, a ornare elit. Vestibulum dapibus semper accumsan. Praesent egestas hendrerit velit. Sed justo arcu, vehicula eget suscipit a, elementum at turpis. Ut pellentesque libero sit amet molestie ullamcorper. Cras pulvinar ante sit amet enim fermentum volutpat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et quam pulvinar, dignissim massa in, consequat elit. Mauris in elementum ex. Etiam quis pretium felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ante erat, et viverra ipsum fermentum tempus. Praesent vel bibendum neque, a ornare elit. Vestibulum dapibus semper accumsan. Praesent egestas hendrerit velit. Sed justo arcu, vehicula eget suscipit a, elementum at turpis. Ut pellentesque libero sit amet molestie ullamcorper. Cras pulvinar ante sit amet enim fermentum volutpat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et quam pulvinar, dignissim massa in, consequat elit. Mauris in elementum ex. Etiam quis pretium felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ante erat, et viverra ipsum fermentum tempus. Praesent vel bibendum neque, a ornare elit. Vestibulum dapibus semper accumsan. Praesent egestas hendrerit velit. Sed justo arcu, vehicula eget suscipit a, elementum at turpis. Ut pellentesque libero sit amet molestie ullamcorper. Cras pulvinar ante sit amet enim fermentum volutpat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et quam pulvinar, dignissim massa in, consequat elit. Mauris in elementum ex. Etiam quis pretium felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ante erat, et viverra ipsum fermentum tempus. Praesent vel bibendum neque, a ornare elit. Vestibulum dapibus semper accumsan. Praesent egestas hendrerit velit. Sed justo arcu, vehicula eget suscipit a, elementum at turpis. Ut pellentesque libero sit amet molestie ullamcorper. Cras pulvinar ante sit amet enim fermentum volutpat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et quam pulvinar, dignissim massa in, consequat elit. Mauris in elementum ex. Etiam quis pretium felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ante erat, et viverra ipsum fermentum tempus. Praesent vel bibendum neque, a ornare elit. Vestibulum dapibus semper accumsan. Praesent egestas hendrerit velit. Sed justo arcu, vehicula eget suscipit a, elementum at turpis. Ut pellentesque libero sit amet molestie ullamcorper. Cras pulvinar ante sit amet enim fermentum volutpat.
            </p>
        </div>
    )
}

export default ModalPage