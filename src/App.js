import React from 'react';
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom';
import Main from './components/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Main />}>
      <Route index element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='logout' element={<Logout />} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
