import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';  // Importing the Axios service

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if the user is authenticated on app load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api.get('/auth/me');  // Using the API service to check auth status
        setUser(response.data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const res = await api.post('/auth/login', { email, password });  // API call for login
      setUser(res.data.user);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };


// import React, { createContext, useState, useEffect } from 'react';
// import api from '../services/api';  // Importing the Axios service

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Check if the user is authenticated on app load
//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const response = await api.get('/auth/me');  // Using the API service to check auth status
//         setUser(response.data.user);
//       } catch (error) {
//         setUser(null);
//       } finally {
//         setLoading(false);
//       }
//     };
//     checkAuth();
//   }, []);

//   const login = async (email, password) => {
//     try {
//       const res = await api.post('/auth/login', { email, password });  // API call for login
//       setUser(res.data.user);
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext, AuthProvider };
