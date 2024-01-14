const data = [5, 4, 8, 1, 5, 2, 3, 10, 7]

// This changes things into a string
const plainSort = data.sort()
console.log(plainSort)

// a and b are flipped 5 for b, 4 for a
// Ascending
const asc = data.sort((a, b) => {
    return a - b
})
console.log(asc)

// a and b are flipped 5 for b, 4 for a
// Ascending
const desc = data.sort((a, b) => {
    return b - a
})
console.log(desc)


const strArray = ["t", "r", "A", "u", "L", "a", "R"]

// Sorting string
const str = strArray.sort((a, b) => {
    return a.localeCompare(b)
})
console.log(str)

// Sorting string
const str2 = strArray.sort((a, b) => {
    return b.localeCompare(a)
})
console.log(str2)


// Sorting an array of objects
const vegetables = [
    { name: "Carrot", weight: 200, cost: 150 },
    { name: "Broccoli", weight: 300, cost: 200 },
    { name: "Tomato", weight: 100, cost: 75 },
    { name: "Cucumber", weight: 250, cost: 125 },
    { name: "Lettuce", weight: 500, cost: 180 }
];

console.log("\nSorting Array Of Objects")

function getSortValue(vegetable) {
    return vegetable.weight / vegetable.cost
}

const sortOrder = "desc"
const arrayOfObjeccts = vegetables.sort((a, b) => {
    const valA = getSortValue(a)
    const valB = getSortValue(b)

    const reverseOrder = sortOrder === "asc" ? 1 : -1;

    if (typeof valA === "string") {
        return valA.localeCompare(valB) + reverseOrder
    } else {
        return (valA - valB )* reverseOrder // Invert the order (valA - valB) * -1
    }
})
console.log(arrayOfObjeccts)