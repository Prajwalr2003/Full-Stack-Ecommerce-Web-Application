import React, { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { use } from "react";

const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

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
        "http://127.0.0.1:3000/api/v1/user/login",
        loginData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        setIsLoggedIn(true);
        setUser(res.data.user);
        setToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        navigate("/home");
      } else {
        setError(res.data.message || "Login failed.");
      }

      return res;
    } catch (error) {
      setError(
        error.response?.data?.message || "Login failed. Please try again."
      );
      console.error("Login Failed", error);
    }
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
    setUser(null);
    setToken(null);
    setRefreshToken(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
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
      if (err.response?.status === 401) {
        logoutUser();
        navigate("/login");
      }
      throw err;
    }
  };

  return (
    <Auth.Provider
      value={{
        isLoggedIn,
        user,
        loginUser,
        logoutUser,
        token,
        getAuthHeaders,
        authenticatedRequest,
        error,
        setError,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export const useAuth = () => useContext(Auth);
