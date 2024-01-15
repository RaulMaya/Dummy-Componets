import { useState } from "react";

function useSort(data, config) {
    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    const handleClick = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder("asc")
            setSortBy(label)
            return true
        }
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

    return { sortedData, sortBy, sortOrder, handleClick }
}

export default useSort