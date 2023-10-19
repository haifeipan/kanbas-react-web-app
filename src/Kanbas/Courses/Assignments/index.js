import React from 'react';
import { Link, useParams } from 'react-router-dom';
import db from '../../Database';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCheckToSlot } from '@fortawesome/free-solid-svg-icons'; 
import {
  faPlus,
  faCheck,
  faEllipsisH,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';



import './index.css';

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div>
      <nav className='breadcrumb'>
        <Link
          to='/Kanbas/Courses'
          className='breadcrumb-item'
          style={{ color: 'red', textDecoration: 'none' }}
        >
          Courses
        </Link>
        <span className='breadcrumb-arrow'>&rarr;</span>
        <Link
          to={`/Kanbas/Courses/${courseId}`}
          className='breadcrumb-item'
          style={{ color: 'red', textDecoration: 'none' }}
        >
          {courseId}
        </Link>
        <span className='breadcrumb-arrow'>&rarr;</span>
        <span className='breadcrumb-item active'>Assignments</span>
      </nav>

      <div className='top-container'>
        <input
          type='text'
          className='form-control'
          placeholder='Search for Assignment'
          style={{ width: 600 }}
        />
        <div className='float-end'>
          <button className='btn btn-primary' style={{ background: 'gray' }}>
            <FontAwesomeIcon icon={faPlus} /> Group
          </button>

          <button className='btn btn-primary' style={{ background: 'red' }}>
            <FontAwesomeIcon icon={faPlus} /> Add Assignment
          </button>

          <button className='btn btn-secondary' style={{ background: 'gray' }}>
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
        </div>
      </div>

      <div>
        <h1>Assignments</h1>
      </div>

      <div className='list-group mt-3'>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className='list-group-item'
            style={{ borderLeft: '4px solid green' }}
          >


            <div className='card'>
              <div className='card-body top-container'>
                <div>
                  <p>
                    <FontAwesomeIcon icon={faBook} />
                  </p>
                </div>

                <div style={{ marginLeft: 30, marginRight: 500 }}>
                  <h6 className='card-title'>{assignment.title}</h6>
                  {/* <p className='card-text'>Due Date :</p> */}
                </div>

                <div className='float-end'>
                  <FontAwesomeIcon
                    icon={faCheckToSlot}
                    style={{ color: 'green' }}
                  />{' '}
                  <FontAwesomeIcon icon={faEllipsisH} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Assignments;
