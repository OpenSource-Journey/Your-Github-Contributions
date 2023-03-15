import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import UserPage from './pages/UserPage/UserPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<UserPage />} path="/:userName" />
      <Route element={<HomePage />} path="*" />
    </Routes>
  );
};

export default AppRoutes;
