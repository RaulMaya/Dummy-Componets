import { useState } from "react";
import Dropdown from "../components/Dropdown.js"

const DropdownPage = () => {
    const options = [
        { "id": "1", "label": "Apple", "value": "apple" },
        { "id": "2", "label": "Banana", "value": "banana" },
        { "id": "3", "label": "Cherry", "value": "cherry" },
        { "id": "4", "label": "Date", "value": "date" },
        { "id": "5", "label": "Elderberry", "value": "elderberry" },
        { "id": "6", "label": "Fig", "value": "fig" },
        { "id": "7", "label": "Grape", "value": "grape" },
        { "id": "8", "label": "Honeydew", "value": "honeydew" },
        { "id": "9", "label": "Kiwi", "value": "kiwi" },
        { "id": "10", "label": "Lemon", "value": "lemon" },
        { "id": "11", "label": "Mango", "value": "mango" },
        { "id": "12", "label": "Nectarine", "value": "nectarine" },
        { "id": "13", "label": "Orange", "value": "orange" },
        { "id": "14", "label": "Papaya", "value": "papaya" },
        { "id": "15", "label": "Quince", "value": "quince" },
        { "id": "16", "label": "Raspberry", "value": "raspberry" },
        { "id": "17", "label": "Strawberry", "value": "strawberry" },
        { "id": "18", "label": "Tomato", "value": "tomato" },
        { "id": "19", "label": "Ugli Fruit", "value": "ugli_fruit" },
        { "id": "20", "label": "Vanilla", "value": "vanilla" },
        { "id": "21", "label": "Watermelon", "value": "watermelon" },
        { "id": "22", "label": "Xigua", "value": "xigua" },
        { "id": "23", "label": "Yellow Watermelon", "value": "yellow_watermelon" },
        { "id": "24", "label": "Zucchini", "value": "zucchini" }
    ]

    const [selection, setSelection] = useState(null)

    const handleSelection = (option) => {
        setSelection(option)
    }

    return (
        <div><Dropdown options={options} value={selection} onChange={handleSelection} /></div>
    );
}

export default DropdownPage;