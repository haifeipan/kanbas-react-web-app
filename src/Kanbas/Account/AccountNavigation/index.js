import { Link, useLocation } from "react-router-dom";
import './index.css';

function AccountNavigation() {

  const links = [
    "Notifications", 
    "Profile", 
    "Files", 
    "Settings", 
    "ePortfolio", 
    "Shared Content", 
    "The Hub", 
    "Qwickly Course Tools", 
    "Global Announcements"
  ];



  const { pathname } = useLocation();

  return (
    <div className="account-sidebar">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Account/${link}`}
          className={`account-sidebar-item ${pathname.includes(link) ? "account-active-link" : ""}`}
        >
          <span>{link}</span>
        </Link>
      ))}
    </div>
  );
}

export default AccountNavigation;


