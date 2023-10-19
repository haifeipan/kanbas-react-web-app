import './index.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import {faBook} from '@fortawesome/free-solid-svg-icons'; 
import courseImage from '../../resources/images/course_image.png';

import db from '../Database';
const courses = db.courses;


const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1 className='dashboard-title'>Dashboard</h1>
      <hr />
      <h2 className='sub-title'>Published Courses (9)</h2>
      <hr />
      <div className='course-grid'>
        {courses.map((course, index) => (
          <div key={index} className='course-card'>
            <Link
              key={course._id}
              to={`/Kanbas/Courses/${course._id}`}
              className='list-group-item'
            >
              <div className='card'>
                
                <img
                  src={courseImage}
                  alt={course.name}
                  className='course-image'
                />
                <div className='card-body'>
                  <h4 className='card-title'>{course.name}</h4>
                  <p className='card-text'>{course.number}</p>
                  <p className='card-text'>Start Date: {course.startDate}</p>
                  <p className='card-text'>End Date : {course.endDate}</p>
                  <p><FontAwesomeIcon icon={faBook}/></p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
