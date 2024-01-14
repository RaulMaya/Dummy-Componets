import { Fragment } from "react"

function Table({ data, config, keyFn }) {
    const renderHeaders = config.map((c) => {
        if (c.header) {
            return <Fragment key={c.label}>{c.header()}</Fragment>
        }
        return <th key={c.label}>{c.label}</th>
    })

    const renderRow = data.map((d) => {
        const renderedCells = config.map((c) => {
            return <td className="px-5 py-3" key={c.label}>{c.render(d)}</td>
        })
        return <tr className="border-b" key={keyFn(d)}>
            {renderedCells}
        </tr>
    })
    return <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                {renderHeaders}
            </tr>
        </thead>
        <tbody>{renderRow}</tbody>
    </table>
}

export default Table

