import { useNavigate } from "react-router-dom";
import { useUser } from "../context/user-context";
import { Employee } from "../types/employee";


interface AuthReturn {
  user: Employee | null;
  setUser: (user: Employee | null) => void;
  isLoading: boolean;
  isAuthenticated: boolean;
  logout: () => void;
  login: (token: string) => void;
  refreshUserData: () => Promise<void>;
}

export const useAuth = (): AuthReturn => {
  const { user, isLoading, setUser, isAuthenticated, refreshUser } = useUser();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("access_token");
    setUser(null);
    navigate("/sign-in");
  };

  const login = (token: string) => {
    localStorage.setItem("access_token", token);
  };
  
  const refreshUserData = async () => {
    await refreshUser();
  };

  return {
    user,
    isLoading,
    setUser,
    isAuthenticated,
    logout,
    login,
    refreshUserData
  };
};