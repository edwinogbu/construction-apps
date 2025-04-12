// src/routes/index.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Register from '../pages/public/Register';

const AppRoutes = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>

      {/* Protected Routes - Dashboard */}
      <Route path="/dashboard" element={user ? <DashboardLayout /> : <Navigate to="/" />}>
        <Route path="overview" element={<DashboardOverview />} />
        <Route path="projects" element={<DashboardProjects />} />
        <Route path="settings" element={<DashboardSettings />} /> 
      </Route>
    </Routes>
  );
};

export default AppRoutes;
