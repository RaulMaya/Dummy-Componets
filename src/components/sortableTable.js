import Table from "./Table";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa6";
import useSort from "../hooks/use-sort";


function SortableTable(props) {
    const { config, data } = props
    const { sortedData, sortBy, sortOrder, handleClick } = useSort(data, config)

    const updateConfig = config.map((c) => {
        if (!c.sortValue) {
            return c
        }

        return {
            ...c,
            header: () => <th onClick={() => { handleClick(c.label) }} className="flex gap-x-2 items-center cursor-pointer hover:text-blue-400 ease-in duration-150">
                {getIcons(c.label, sortBy, sortOrder)}
                {c.label}
            </th>
        }
    })


    return <Table {...props} data={sortedData} config={updateConfig} />
}


function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <FaSort />
    }

    if (sortOrder === null) {
        return <FaSort />
    } else if (sortOrder === "asc") {
        return <FaSortUp />
    } else if (sortOrder === "desc") {
        return <FaSortDown />
    }

}

export default SortableTable

