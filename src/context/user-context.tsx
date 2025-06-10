'use client'

import React, { createContext, useContext, useEffect, useState } from "react";
import { currentUser } from "../api/employee";
import { Employee } from "../types/employee";
interface UserContextType {
  user: Employee | null;
  setUser: (user: Employee | null) => void;
  isLoading: boolean;
  isAuthenticated: boolean;
  refreshUser: () => Promise<void>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Employee | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = async () => {
    const token = localStorage.getItem("access_token");
    
    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const userData = await currentUser();
      console.log(userData);

      setUser(userData);
    } catch (error) {
      console.log(error);
      setUser(null);
      localStorage.removeItem("access_token");
    } finally {
      setIsLoading(false);
    }
  };

  const refreshUser = async () => {
    await fetchUser();
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const value = {
    user,
    setUser,
    isLoading,
    isAuthenticated: !!user && !isLoading,
    refreshUser,
    logout
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};