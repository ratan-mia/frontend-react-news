import logo from "./logo.svg";
import "./App.css";
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login2 from "./components/user-components/Login2";
import Register from "./components/user-components/Register";
import UserProfile from "./pages/UserProfile";
import ProtectedRoutes from "./ProtectedRoutes";
import BusinessNews from "./pages/News/BusinessNews";
import ScienceNews from "./pages/News/ScienceNews";
import Search from "./pages/Search";

function App() {
  const [user, setUser] = useState(null);

  const handleUser = (loggedInUser) => {
    setUser(loggedInUser);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login2 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/news/business" element={<BusinessNews />} />
        <Route path="/news/science" element={<ScienceNews />} />
        <Route path="/search" element={<Search />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<UserProfile user={user} />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
