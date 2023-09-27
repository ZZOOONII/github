import Input from "./Input";
import Result from "./Result";
import Select from "./Select";

function App() {
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Select />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Input />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Result />
      </div>
    </>
  );
}

export default App;
