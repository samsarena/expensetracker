import { useState } from "react";
import { categories } from "../App";

function Form({ setListData, listData }) {
    let [formData, setFormData] = useState({});
    const changeHandler = (e) => {
        setFormData({
            ...formData,
            "id": listData.length + 1,
            [e.name]: e.value,
        })
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        setListData([...listData, formData]);
    }

    return (
        <>
            <div className="jumbotron">
                <h1 className="display-3">Expense Tracker</h1>
                <p className="lead">Add data through the form. Pass data to table and apply filter based on category. Add action controls to update and delete row data.</p>
                <hr className="my-4" />
            </div>
            <form onSubmit={(e) => formSubmitHandler(e)} className="row mb-3">
                <div className="col-sm-4">
                    <label htmlFor="input-description" className="form-label">Description</label>
                    <input type="text" name="description" className="form-control" id="input-description" maxLength="3" required onChange={(e) => changeHandler(e.target)} value={formData.description} />
                </div>
                <div className="col-sm-4">
                    <label htmlFor="input-amount" className="form-label">Amount</label>
                    <input type="text" name="amount" className="form-control" id="input-amount" required onChange={(e) => changeHandler(e.target)} />
                </div>
                <div className="col-sm-4">
                    <label htmlFor="input-category" className="form-label">Category</label>
                    <select className="form-select" name="category" id="input-category" onChange={(e) => changeHandler(e.target)}>
                        <option value="">Select Category</option>
                        {categories.map((item) => {
                            return <option key={item} value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div className="col-sm-12 d-grid mt-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            <hr className="my-5" />
        </>
    );
}

export default Form;
