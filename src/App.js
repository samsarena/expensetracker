import { useEffect, useState } from "react";
import Form from "./components/Form";
import ExpenseTable from "./components/ExpenseTable";

export const categories = ["Grocery", "Utilities", "Entertainment"];

function App() {
  let [listData, setListData] = useState([]);
  useEffect(()=>{
    console.log("PARENT", listData);
  }, [listData]);
  let x = "Ashis";
  return (
    <>
      <div className="container">
        <div className="row">
          <Form setListData={setListData} />
          <ExpenseTable data={listData} />
        </div>
      </div>
    </>
  );
}

export default App;
