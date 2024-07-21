import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';

export default function LayoutHome() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="layout-container">
      
      <main className="main-content">
        <Outlet />
      </main>
      <nav
        className={`side-nav ${isExpanded ? 'expanded' : ''}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
    
        <ul>
          <li><Link to="/"><i className="fas fa-home"></i> {isExpanded && <span>בית</span>}</Link></li>
          <li><Link to="/ads"><i className="fas fa-ad"></i> {isExpanded && <span>פרסומות</span>}</Link></li>
          <li><Link to="/login"><i className="fas fa-user"></i> {isExpanded && <span>  איזור אישי </span>}</Link></li>
        </ul>
      </nav>
    </div>
  );
}
