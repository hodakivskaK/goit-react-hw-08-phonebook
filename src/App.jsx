import { Route, Routes,   } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, lazy } from 'react'

import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

import { Layout } from "components/Layout";
import { useAuth } from './hooks/useAuth';
import { refreshUser } from './redux/auth/authOperation'

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const PhoneBookPage = lazy(() => import('./pages/PhoneBookPage'));

export const App = () => {
  const dispatch = useDispatch(); 
    const { isRefreshing } = useAuth();

    useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
    
  
     return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/register" component={<PhoneBookPage />} />
          }
        />
      </Route>
    </Routes>
  );
    
}
