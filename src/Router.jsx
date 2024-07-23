import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutHome from './Layout';
import Home from './Components/Pages/Home';
import Ads from './Components/Pages/Ads';
import LogIn from './Components/Pages/Log_in';
import SignIn from './Components/Pages/Sign_in';
import About from './Components/Pages/About';
import Art from './Components/Pages/Articles';
import Meeting from './Components/Pages/Meeting';

const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutHome />}>
          <Route index element={<Home />} />
          <Route path="ads" element={<Ads />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="about" element={<About />} />
          <Route path="art" element={<Art />} />
          <Route path="meeting" element={<Meeting />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default MyRouter;
