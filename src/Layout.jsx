import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import  Logo from '../src/Components/Logo';
import {useAuth} from '../src/Components/AuthContext';


export default function LayoutHome() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const { user, loading } = useAuth();

  if (loading) {
    return <div>טוען... </div>;
  }


  return (
    <div className="layout-container">
       {isMobile? <Logo className={'logo'} sized= '-1500 0 4000 800'/> : ''}
      <main className="main-content">
       <div> <Outlet /></div>
      </main>
      <nav
        className={`side-nav ${isExpanded ? 'expanded' : ''} ${isMobile ? 'mobile' : ''}`}
        onMouseEnter={() => !isMobile && setIsExpanded(true)}
        onMouseLeave={() => !isMobile && setIsExpanded(false)}
      >
        <ul>
          {isMobile ? '' : <li>
          <Logo className={'logo'} sized= '0 0 800 800'/>
          </li>}
          
          <li className={isActive('/')}>
            <Link to="/">
              <i className="fas fa-home"></i>
              {(isExpanded || isMobile) && <span>בית</span>}
            </Link>
          </li>
          <li className={isActive('/ads')}>
            <Link to="/ads">
              <i className="fas fa-ad"></i>
              {(isExpanded || isMobile) && <span>פרסומים</span>}
            </Link>
          </li>
          <li className={isActive('/login')}>
             <Link to={user ? "login/dashboard" : "/login"}>
              <i className="fas fa-user"></i>
              {(isExpanded || isMobile) && <span> איזור אישי </span>}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}