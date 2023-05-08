import { useEffect, useState } from "react";
import Form from "./components/Form";
import ExpenseTable from "./components/ExpenseTable";

export const categories = ["Grocery", "Utilities", "Entertainment"];

function App() {
  let [listData, setListData] = useState([]);
  useEffect(()=>{
    console.log("PARENT", listData);
  }, [listData]);
  
  return (
    <>
      <div className="container">
        <div className="row">
          <Form setListData={setListData} listData={listData} />          
          <ExpenseTable data={listData} />
          {/* {listData.map((item)=>{
            return <p>{item}</p>
          })} */}
        </div>
      </div>
    </>
  );
}

export default App;
