import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/Home.jsx";
import NotFound from "./components/notFound.jsx";
import Datenschutz from "./components/Datenschutz.jsx";
import TicketView from "./components/TicketView.jsx";
import Impressum from "./components/Impressum.jsx";
import TicketDetail from "./components/TicketDetail.jsx";
import Register from "./components/Registrierung.jsx";
import Login from "./components/Login.jsx";





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Datenschutz", element: <Datenschutz /> },
      { path: "/TicketView", element: <TicketView /> },
      { path: "/Impressum", element: <Impressum /> },
      { path: "/TicketDetail", element: <TicketDetail />},
      { path: "/TicketDetail/:id", element: <TicketDetail />},
      { path: "Login", element: <Login />},
      { path: "/register", element: <Register />},

      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
