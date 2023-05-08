import { useEffect, useState } from "react";
import Form from "./components/Form";
import ExpenseTable from "./components/ExpenseTable";

export const categories = ["Grocery", "Utilities", "Entertainment"];

function App() {
  let [listData, setListData] = useState([]);
  return (
    <>
      <div className="container">
        <Form setListData={setListData} listData={listData} />
        <div className="row">
          <ExpenseTable listData={listData} />
        </div>
      </div>
    </>
  );
}

export default App;
