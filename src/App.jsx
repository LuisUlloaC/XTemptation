import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSide from "./components/session/SigninScreen";
import { CustomProvider } from "./components/context/provider";
import SignUp from "./components/session/SignupScreen";
import ForgotPassword from "./components/session/ForgotPasswordScreen";
import HomeScreen from "./components/home/Home";
import { LoginForm } from "./components/session/LoginFormhtml";
import MyComponent from "./AppRedirect";
import HomeScreenMobile from "./components/mobile/homeMobile";


function App() {
  return (
      <CustomProvider  >
        <Router >
          <Routes >
              <Route path="/" element={<MyComponent/>}/>
              <Route path="/signin" element={<SignInSide/>}/>
              <Route path="/test" element={<LoginForm/>}/>
              <Route path="/home" element={<HomeScreen/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/forgotPassword" element={<ForgotPassword/>}/>
              {/*Mobile screens*/}
              <Route path="/m.signin" element={<SignInSide/>}/>
              <Route path="/m.home" element={<HomeScreenMobile/>}/>
          </Routes>
        </Router>
      </CustomProvider>
  );
}

export default App;
