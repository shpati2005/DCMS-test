import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/"
            element={
              <main className="flex min-h-screen items-center justify-center px-4 py-8">
                <section className="w-full max-w-md bg-white border border-gray-200 rounded-xl p-6">
                  <h1 className="text-xl font-semibold text-brand-dark">
                    Dental Clinic Management System
                  </h1>
                  <p className="mt-2 text-sm text-gray-500">
                    Sign in to manage clinic operations.
                  </p>
                </section>
              </main>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
