import { useState } from "react";
import { categories } from "../App";

function Form({setListData, listData}) {
    let [formData, setFormData] = useState({});
    const changeHandler = (e) => {
        setFormData({
            ...formData,
            id: formData.length + 1,
            [e.name]: e.value,
        })
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();        
        setListData([...listData, formData]);
    }

    return (
        <>
            <form onSubmit={(e) => formSubmitHandler(e)}>
                <div className="mb-3">
                    <label htmlFor="input-description" className="form-label">Description</label>
                    <input type="text" name="description" className="form-control" id="input-description" maxLength="3" required onChange={(e) => changeHandler(e.target)} value={formData.description} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input-amount" className="form-label">Amount</label>
                    <input type="text" name="amount" className="form-control" id="input-amount" required onChange={(e) => changeHandler(e.target)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input-category" className="form-label">Category</label>
                    <select className="form-select" name="category" id="input-category" onChange={(e) => changeHandler(e.target)}>
                        <option value="">Select Category</option>
                        {categories.map((item)=>{
                            return <option key={item} value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default Form;
