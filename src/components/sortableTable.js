import Table from "./Table";
import { TbArrowsSort } from "react-icons/tb";

function SortableTable(props) {
    const { config } = props

    const handleClick = (label) => {
        console.log(label)
    }

    const updateConfig = config.map((c) => {
        if (!c.sortValue) {
            return c
        }

        return {
            ...c,
            header: () => <th onClick={() => { handleClick(c.label) }} className="flex gap-x-2 items-center"><TbArrowsSort />{c.label}</th>
        }
    })

    return <Table {...props} config={updateConfig} />
}

export default SortableTable

