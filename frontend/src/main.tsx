import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import About from './pages/About.tsx';
import Tables from './pages/Tables.tsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path:'/about',
    element: <About />
  },
  {
    path:'/tables',
    element: <Tables/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
