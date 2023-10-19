import db from '../../Database';
import { Link, useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faBook,
  faEllipsisH,
  faCheckToSlot,
  faFileImport,
  faFileExport,
  faCog,
  faFilter,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import './index.css';

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  return (
    <div>
      <nav className='breadcrumb'>
        <Link
          to={`/Kanbas/Courses/${courseId}`}
          className='breadcrumb-item'
          style={{ color: 'red', textDecoration: 'none' }}
        >
          {courseId}
          
        </Link>
        <span className='breadcrumb-arrow'>&rarr;</span>

        <span className='breadcrumb-item active'>Grades</span>
      </nav>

      <div className='float-end'>
        <button
          className='btn btn-primary'
          style={{ background: 'gray', marginRight: 5 }}
        >
          <FontAwesomeIcon icon={faFileImport} /> Import
        </button>

        <button
          className='btn btn-primary'
          style={{ background: 'gray', marginRight: 5 }}
        >
          <FontAwesomeIcon icon={faFileExport} /> Export
        </button>

        <button
          className='btn btn-secondary'
          style={{ background: 'gray', marginRight: 5 }}
        >
          <FontAwesomeIcon icon={faCog} />
        </button>
      </div>
      <br />
      <br />

      <div className='top-container'>
        <div>
          <b>Student Names</b><br/>

          <div className='top-container'>
          <FontAwesomeIcon icon={faSearch} style={{marginRight: 5 }}/>
          <input
            type='text'
            className='form-control'
            placeholder='Search Students'
            style={{ width: 400, marginRight: 50 }}
          />
          
          </div>

        </div>
        <div>
          <b>Assignment Names</b>
          <div className='top-container'>
          <FontAwesomeIcon icon={faSearch} style={{marginRight: 5 }}/>
          <input
            type='text'
            className='form-control'
            placeholder='Search Students'
            style={{ width: 400, marginRight: 50 }}
          />
          
          </div>
        </div>
      </div>

      <br />
      <button
        className='btn btn-primary'
        style={{ background: 'gray', marginRight: 5 }}
      >
        <FontAwesomeIcon icon={faFilter} /> Apply Filters
      </button>
      <br />
      <br />
      <h1>Grades</h1>
      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td>
                    <span style={{color:'red'}}>{user.firstName} {user.lastName}</span>
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ''}</td>;
                  })}
                </tr>
              );
            })}{' '}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
