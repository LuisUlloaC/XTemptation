import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSide from "./components/session/LoginForm";
import { CustomProvider } from "./components/context/provider";
import SignUp from "./components/session/SignUp";
import ForgotPassword from "./components/session/ForgotPassword";
import HomeScreen from "./components/home/Home";


function App() {
  return (
      <CustomProvider  >
        <Router >
          <Routes >
              <Route path="/signin" element={<SignInSide/>}/>
              <Route path="/home" element={<HomeScreen/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/forgotPassword" element={<ForgotPassword/>}/>


          </Routes>
        </Router>
      </CustomProvider>
  );
}

export default App;
