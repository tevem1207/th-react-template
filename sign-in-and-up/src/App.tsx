import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "pages/SignIn/SignIn";
import SignUp from "pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
