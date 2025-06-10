import { UserProvider } from "./context/user-context";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import Auth from "./layouts/Auth";
// import Order from "./layouts/Order";
import QrMenu from "./layouts/QrMenu";
import { ToastProvider, useToast } from "./context/toast-context";
import { useEffect } from "react";
import { setGlobalErrorHandler } from "./lib/handle-error";

function AppContent() {
  const { showError } = useToast();

  useEffect(() => {
    setGlobalErrorHandler(showError);
  }, [showError]);

  return (
    <UserProvider>
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/qr-menu/*" element={<QrMenu />} />
        <Route path="/auth/*" element={<Auth />} />
        {/* <Route path="/order/*" element={<Order />} /> */}
        <Route path="/" element={<Navigate to="/dashboard/home" replace />} />
        <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      </Routes>
    </UserProvider>
  );
}

function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}

export default App;