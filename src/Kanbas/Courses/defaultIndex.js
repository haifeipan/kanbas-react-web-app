import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import Settings from "./Settings";
import CourseDetails from "./Settings/CourseDetails";
import Navigation from "./Settings/Navigation";
import Sections from "./Settings/Sections";
import Apps from"./Settings/Apps";
import FeatureOptions from "./Settings/FeatureOptions";
import Integrations  from "./Settings/Integrations";



function defaultCourses() {




  return (
    <div>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            {/* <Route path="Home" element={<Home/>} /> */}
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId"
                   element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades />} />

            {/* add by myself */}
            <Route path="Settings" element={<CourseDetails />} />
            <Route path="Settings/CourseDetails" element={<CourseDetails />} />
            <Route path="Settings/Navigation" element={<Navigation />} />
            <Route path="Settings/Sections" element={<Sections />} />
            <Route path="Settings/Apps" element={<Apps />} />
            <Route path="Settings/FeatureOptions" element={<FeatureOptions />} />
            <Route path="Settings/Integrations" element={<Integrations />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default defaultCourses;