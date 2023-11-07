import React from 'react';
import ReactDOM from 'react-dom/client';
import useLocalStorage from 'use-local-storage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginForm from './components/session/LoginForm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={
        <div>
          <Outlet/>
        </div>
      }>
        <Route path="/" element={<LoginForm/>} />
      </Route>
      <Route path='/signin' element={<LoginForm/>}/>
    </>
  )
);

const ThemeProvider =({children})=>{
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')
  global.GlobalTheme = theme
  

  const switchTheme =()=> {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div data-theme={theme}>
      {children}
      <button style={{position: 'fixed', bottom: 0, right: 0}} onClick={switchTheme}>Switch theme to {theme === 'light' ? 'dark' : 'light'}</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider >
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);


reportWebVitals();
