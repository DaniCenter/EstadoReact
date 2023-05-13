import "./App.css";
import { ClassState } from "./Components/ClassState";
import { UseState } from "./Components/UseState";

function App() {
  return (
    <>
      <UseState name="UseState"></UseState>
      <ClassState name="ClassState"></ClassState>
    </>
  );
}

export default App;
