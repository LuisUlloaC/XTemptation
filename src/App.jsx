import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignInSide from "./components/session/SigninScreen";
import { CustomProvider } from "./components/context/provider";
import SignUp from "./components/session/SignupScreen";
import ForgotPassword from "./components/session/ForgotPasswordScreen";
import HomeScreen from "./components/home/Home";
import AppRedirectComponent from "./AppRedirect";


function App() {
  return (
      <CustomProvider  >
        <Router>
          <Routes>
              <Route path="*" element={<Navigate to="/home" />}/>
              <Route exact path="/" element={<AppRedirectComponent/>}/>
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
