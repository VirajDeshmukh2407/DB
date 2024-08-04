import "./App.css";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import Forgot_pass from "./components/Forgot_pass.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/sign_in" element={<Signin />}></Route>
          <Route path="/sign_up" element={<Signup />}></Route>
          <Route path="/forgot_pass" element={<Forgot_pass />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
