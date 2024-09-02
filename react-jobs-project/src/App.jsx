import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import React from 'react'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from "./pages/JobPage"

const App = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/jobs' element={<JobsPage />} />
          <Route path='/jobs/:id' element={<JobPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Route>
    )
    );
  
    return <RouterProvider router={router} />;
  };


export default App
