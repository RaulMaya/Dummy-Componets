import SortableTable from "../components/sortableTable";

const fruits = [
    {
        name: "Apple",
        color: "bg-red-500",
        likenessScore: 8
    },
    {
        name: "Banana",
        color: "bg-yellow-300",
        likenessScore: 7
    },
    {
        name: "Grape",
        color: "bg-purple-600",
        likenessScore: 9
    },
    {
        name: "Orange",
        color: "bg-orange-400",
        likenessScore: 6
    },
    {
        name: "Kiwi",
        color: "bg-green-500",
        likenessScore: 8
    },
    {
        name: "Blueberry",
        color: "bg-blue-700",
        likenessScore: 7
    },
    {
        name: "Strawberry",
        color: "bg-red-400",
        likenessScore: 9
    },
    {
        name: "Watermelon",
        color: "bg-green-300",
        likenessScore: 10
    },
    {
        name: "Peach",
        color: "bg-pink-200",
        likenessScore: 5
    },
    {
        name: "Cherry",
        color: "bg-red-700",
        likenessScore: 7
    }
];

const config = [
    {
        label: 'Fruits',
        render: (fruits) => fruits.name,
        sortValue: (fruits) => fruits.name,
    },
    {
        label: 'Color',
        render: (fruits) => <div className={`p-3 m-2 ${fruits.color}`}></div>
    },
    {
        label: 'Score',
        render: (fruits) => fruits.likenessScore,
        sortValue: (fruits) => fruits.likenessScore,
    }
]

const keyFn = (fruit) => {
    return fruit.name
}

function TablePage() {
    return <SortableTable data={fruits} config={config} keyFn={keyFn} />
}

export default TablePage