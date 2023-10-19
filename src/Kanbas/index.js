import Nav from '../Nav';
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './Dashboard';
import Courses from "./Courses";
import Account from './Account';
import Settings from './Courses/Settings';
import defaultCourses from './Courses/defaultIndex';

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div>

        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account/*" element={<Account/>} />
          <Route path="Dashboard" element={<Dashboard />} />


          {/* add by myself */}
          <Route path="Courses" element={<Courses />} />
          {/* <Route path="Courses/:courseId/Settings" element={<Settings />} /> */}
          {/* add by myself */}

          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Calendar" element={<h1>Calender</h1>} />
          <Route path="Inbox" element={<h1>Inbox</h1>} />
          <Route path="History" element={<h1>History</h1>} />
          <Route path="Studio" element={<h1>Studio</h1>} />
          <Route path="Commons" element={<h1>Commons</h1>} />
          <Route path="Help" element={<h1>Help</h1>} />
        </Routes>

      </div>
    </div>
  );
}
export default Kanbas;
