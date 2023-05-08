import { useState } from "react";
import { categories } from "../App";
function ExpenseTable({ listData }) {
    let [filteredData, setFilteredData] = useState(listData);
    const filterHandler = (e) => {
        if(e.value){
            setFilteredData(listData.filter((item) => {
                return item.category === e.value;
            }));
        } else {
            setFilteredData(listData);
        }
    }
    return (
        <>
            <h2 className="display-6 mb-3">Expense Lists</h2>
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
                    {filteredData.map((item) => {
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