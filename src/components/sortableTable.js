import { func } from "prop-types";
import Table from "./Table";
import { useState } from "react";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa6";

function SortableTable(props) {
    const { config, data } = props
    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    const handleClick = (label) => {
        if (sortOrder === null) {
            setSortOrder("asc")
            setSortBy(label)
        } else if (sortOrder === "asc") {
            setSortOrder("desc")
            setSortBy(label)
        } else if (sortOrder === "desc") {
            setSortOrder(null)
            setSortBy(null)
        }
    }

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

    let sortedData = data

    if (sortBy && sortOrder) {
        const { sortValue } = config.find(c => c.label === sortBy)
        sortedData = [...data].sort((a, b) => {
            const valA = sortValue(a)
            const valB = sortValue(b)

            const reverseOrder = sortOrder === "asc" ? 1 : -1;

            if (typeof valA === "string") {
                return valA.localeCompare(valB) * reverseOrder
            } else {
                return (valA - valB) * reverseOrder // Invert the order (valA - valB) * -1
            }
        })
    }

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

