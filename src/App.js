import { Routes, Route } from "react-router-dom";

// Components
import Entry from "./components/Entry";
import Error from "./components/Error";
import People from "./components/People";
import Planets from "./components/Planets";

function App() {
  return (
    <div className="App">
      <>
        <h1>Luke API-walker</h1>
        <Entry />
        <Routes>
          <Route path="/people/:id" element={<People />} />
          <Route path="/planets/:id" element={<Planets />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </>
    </div>
  );
}

export default App;

// useParams
// import { useParams } from "react-router"; (in imports)
// const Param1 = (props) => {
// const Param2 = useParams();
// }

// return (
// <h1> Welcome to { Param2 } <h1/>
// )
