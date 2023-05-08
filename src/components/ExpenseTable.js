import { categories } from "../App";
function ExpenseTable({ data }) {
    const filterHandler = (e) => {
        console.log(e);
    }
    return (
        <>
            <p>&nbsp;</p>
            <hr />
            <select className="form-select" name="category" id="input-category" onChange={(e) => filterHandler(e.target)}>
                <option value="">Select Category</option>
                {categories.map((item) => {
                    return <option key={item} value={item}>{item}</option>
                })}
            </select>
            <p>&nbsp;</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.description}</td>
                                <td>{item.amount}</td>
                                <td>{item.category}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ExpenseTable;