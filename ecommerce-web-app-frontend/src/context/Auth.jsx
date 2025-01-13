import React, { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      try {
        setIsLoggedIn(true);
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
      } catch (err) {
        console.log("Error parsing user data", err);
        logoutUser();
      }
    }
  }, []);

  const loginUser = async (loginData) => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/v1/users/login",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success == true) {
        setIsLoggedIn(true);
        setUser(res.data.user);
        setToken(res.data.token);

        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      } else {
        setError(res.data.message || "Login failed.");
      }

      return res;
    } catch (error) {
      console.log("Login Failed", error);
    }
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
    setUser(null);
    setToken(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const getAuthHeaders = () => {
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  const authenticatedRequest = async (url, options = {}) => {
    try {
      const headers = { ...getAuthHeaders(), ...options.headers };
      const res = await axios({ ...options, url, headers });
      return res;
    } catch (err) {
      if (error.response?.status === 401) {
        logoutUser();
      }
      throw error;
    }
  };

  return (
    <Auth.Provider
      value={
        (isLoggedIn,
        user,
        loginUser,
        logoutUser,
        token,
        getAuthHeaders,
        authenticatedRequest,
        error,
        setError)
      }
    >
      {children}
    </Auth.Provider>
  );
};

export const useAuth = () => useContext(Auth);
