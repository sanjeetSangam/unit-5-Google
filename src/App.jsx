import { Route, Routes } from "react-router-dom";
import "./App.css";
import { S_Details } from "./components/details/details";
import { Search } from "./components/google_Home";
import { Results } from "./components/results";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Search />}></Route>
        <Route path="/search" element={<Results />}></Route>
        <Route path="/page/:id" element={<S_Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
