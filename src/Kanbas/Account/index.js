
import AccountNavigation from "./AccountNavigation";
import { Routes, Route, Navigate } from "react-router-dom";

import Profile from "./Profile";
import EditProfile from "./EditProfile";

function Account() {
  return (

    <div className='d-flex'>
      <AccountNavigation />

      <div>
        <Routes>
          <Route path='/' element={<Navigate to='Profile' />} />
          <Route path='Notifications' element={<h1>Notifications</h1>} />
          <Route path='Profile' element={<Profile/>} />
          <Route path="EditProfile" element={<EditProfile/>} />
          <Route path='Files' element={<h1>Files</h1>} />
          <Route path='Settings' element={<h1>Settings</h1>} />
          <Route path='ePortfolio' element={<h1>ePortfolio</h1>} />
          <Route path='Shared Content' element={<h1>Shared Content</h1>} />
          <Route path='The Hub' element={<h1>The Hub</h1>} />
          <Route path='Qwickly Course Tools' element={<h1>Qwickly Course Tools</h1>} />
          <Route path='Global Announcements' element={<h1>Global Announcements</h1>} />
        </Routes>
      </div>
    </div>
  );
}
export default Account;
