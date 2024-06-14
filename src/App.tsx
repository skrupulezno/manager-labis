import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import { Layout } from "antd";

const { Content } = Layout;

const ProtectedRoute: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <Navigate to="/" />;
  }

  return authContext.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

const App: React.FC = () => {
  const authContext = useContext(AuthContext);

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Content style={{ padding: "50px", alignContent: "center" }}>
          <Routes>
            <Route
              path="/"
              element={
                authContext?.isAuthenticated ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Login />
                )
              }
            />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

const AppWithProviders: React.FC = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default AppWithProviders;
