//import "./App.css";
import WeightTrackerProvider from "./Context/WeightTrackerContext";
import SignUp from "./Components/Auth/SignUp";
import Login from "./Components/Auth/Login";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import { AuthProvider } from "./Context/AuthContext";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <WeightTrackerProvider>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<PrivateRoute />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </WeightTrackerProvider>
      </Router>
    </div>
  );
}

export default App;
