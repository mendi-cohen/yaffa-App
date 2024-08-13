import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutHome from './Layout';
import Home from './Pages/Home';
import Ads from './Pages/Ads';
import LogIn from './Pages/Log_in';
import SignUp from './Pages/Sign_up';
import About from './Pages/About';
import Art from './Pages/Articles';
import Meeting from './Pages/Meeting';
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './Components/ProtectNav';
import AdminBoard from "./Pages/AdminBoard";

const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutHome />}>
          <Route index element={<Home />} />
          <Route path="ads" element={<Ads />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signin" element={<SignUp />} />
          <Route path="about" element={<About />} />
          <Route path="art" element={<Art />} />
          <Route path="meeting" element={<Meeting />} />
          <Route path="login/dashboard" element={
            <ProtectedRoute>
            <Dashboard />
            </ProtectedRoute>
            } />
          <Route path="login/AdminBoard" element={
            <ProtectedRoute>
            <AdminBoard />
            </ProtectedRoute>
            } />
        </Route>
      </Routes>
    </Router>
  );
}

export default MyRouter;
