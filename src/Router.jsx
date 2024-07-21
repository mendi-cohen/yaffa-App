import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutHome from './Layout';
import Home from './Components/Pages/Home';
import Ads from './Components/Pages/Ads';
import LogIn from './Components/Pages/Log_in';
import SignIn from './Components/Pages/Sign_in';
import About from './Components/Pages/About';

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
        </Route>
      </Routes>
    </Router>
  );
}

export default MyRouter;
