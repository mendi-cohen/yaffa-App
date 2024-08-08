import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authToken, setAuthToken] = useState(null);
  
  const checkAuthStatus = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_HOST_API}/users/check-auth`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      if (response.data.isAuthenticated) {
        setUser(response.data.user);
      }
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, [authToken]);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = async () => {
    await axios.post(`${process.env.REACT_APP_HOST_API}/users/logout`, {}, {
      withCredentials: true
    });
    setUser(null);
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, checkAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
