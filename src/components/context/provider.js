import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const Context = createContext(false);

export function CustomProvider({ children }) {
  const savedState = sessionStorage.getItem('Session');
  const [state, setState] = useState(savedState ? JSON.parse(savedState) : {});
  const baseURL= "https://tbxxfx0g-8000.euw.devtunnels.ms/"
  const api = axios.create({
    baseURL: "http://192.168.1.105:8000/"
  });

  if (state.access) {
    api.defaults.headers.common["Authorization"] = "Bearer "+state.access;
  }
  useEffect(() => {
    sessionStorage.setItem('Session', JSON.stringify(state));
    if (state.access) {
      api.defaults.headers.common["Authorization"] = "Bearer "+state.access;
    } else {
      delete api.defaults.headers.common["Authorization"];
    }
  }, [state]);
  return (
    <Context.Provider value={{ state, setState, api }}>
      {children}
    </Context.Provider>
  );
}