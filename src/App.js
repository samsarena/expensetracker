import Form from "./components/Form";

export const categories = ["Grocery", "Utilities", "Entertainment"];

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
