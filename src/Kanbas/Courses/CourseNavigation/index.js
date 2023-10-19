import { Link, useParams, useLocation } from "react-router-dom";
import './index.css';
import db from "../../Database";

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panoapto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Progress Reports [EAB navigate]", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();

  const finalCourseId = courseId ?  courseId : db.courses[0]["_id"];

  return (
    <div className="course-sidebar" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${finalCourseId}/${link}`}
          className={`course-sidebar-item ${pathname.includes(link) ? "course-active-link" : ""}`}
          >
          <span>{link}</span>
        </Link>
      ))}
    </div>
  );
}


export default CourseNavigation;