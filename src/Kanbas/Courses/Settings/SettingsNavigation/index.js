import { Link, useParams, useLocation } from "react-router-dom";

import './index.css';

function SettingsNavigation() {
    const links = ["CourseDetails", "Sections", "Navigation", "Apps", "FeatureOptions", "Integrations"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    
    return (
      
        <div className="settings-sidebar" style={{ width: 150 }}>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/Settings/${link}`}
            className={`settings-sidebar-item ${pathname.includes(link) ? "settings-active-link" : ""}`}
            >
            <span>{link}</span>
          </Link>
        ))}
        <hr/>
      </div>
    );
  }
  export default SettingsNavigation;