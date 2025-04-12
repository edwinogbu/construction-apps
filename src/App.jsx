
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes';

const App = () => {
  return (
    // <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    // </AuthProvider>
  );
};

export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
     
//       <h1>Eddy</h1>
      
//     </>
//   )
// }

// export default App
