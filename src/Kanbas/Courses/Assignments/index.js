import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import db from '../../Database';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCheckToSlot } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import './index.css';

import { useSelector, useDispatch } from 'react-redux';
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setNewAssignment,
  initiateAssignment,
  addNewAssignment,
  setAssignments,
} from './assignmentsReducer';

import * as client from './client';

function Assignments() {
  const { courseId } = useParams();

  useEffect(() => {
    client
      .findAssignmentsForCourse(courseId)
      .then((assignments) => dispatch(setAssignments(assignments)));
  }, [courseId]);

  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();

  // const assignments = db.assignments;

  // const courseAssignments = assignments.filter(
  //   (assignment) => assignment.course === courseId
  // );

  // const history = useHistory();

  // const handleButtonClick = (assignment) => {
  //   dispatch(setAssignment(assignment));
  //   const url = `/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`;
  //   history.push(url);
  // };

  const handleDeleteConfirmation = (assignmentId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete?');
    if (shouldDelete) {
      // dispatch(deleteAssignment(assignmentId));

      client.deleteAssignment(assignmentId).then((status) => {
        dispatch(deleteAssignment(assignmentId));
      });
    }
  };

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

          {/* <button className='btn btn-primary' style={{ background: 'red' }}>
            <FontAwesomeIcon icon={faPlus} /> Add Assignment
          </button> */}

          <Link
            key={assignment._id}
            // to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            to={`/Kanbas/Courses/${courseId}/Assignments/Add`}
          >
            {' '}
            <button
              className='btn btn-danger'
              // onClick={() => dispatch(setNewAssignment(newAssignment))}
              // onClick={() => dispatch(initiateAssignment(courseId))}
            >
              <FontAwesomeIcon icon={faPlus} /> Add Assignment
            </button>
          </Link>

          <button className='btn btn-secondary' style={{ background: 'gray' }}>
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
        </div>
      </div>

      <div>
        <h1>Assignments</h1>
      </div>

      <div className='list-group mt-3'>
        {assignments.map((assignment) => (
          // <Link
          //   key={assignment._id}
          //   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
          //   className='list-group-item'
          //   style={{ borderLeft: '4px solid green' }}
          // >
          <div className='card'>
            <div className='card-body top-container'>
              <div>
                <p>
                  <FontAwesomeIcon icon={faBook} />
                </p>
              </div>

              <div style={{ marginLeft: 30, marginRight: 50, width: 60000 }}>
                <div>
                  <h4 className='card-title'>
                    <b>{assignment.title}</b>
                  </h4>
                </div>

                <div className='float-end'>
                  {/* <button
                    style={{ marginLeft: 10, marginRight: 10 }}
                    className='btn btn-warning btn-sm'
                    onClick={() => dispatch(setAssignment(assignment))}
                  >
                    Edit
                  </button> */}
                  <Link
                    key={assignment._id}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  >
                    {' '}
                    <button
                      style={{ marginLeft: 10, marginRight: 10 }}
                      className='btn btn-warning btn-sm'
                      onClick={() => dispatch(setAssignment(assignment))}
                    >
                      Edit
                    </button>
                  </Link>
                  <button
                    style={{ marginRight: 30 }}
                    className='btn btn-danger btn-sm'
                    // onClick={() => dispatch(deleteAssignment(assignment._id))}
                    onClick={() => handleDeleteConfirmation(assignment._id)}
                  >
                    Delete
                  </button>
                  <FontAwesomeIcon
                    icon={faCheckToSlot}
                    style={{ color: 'green' }}
                  />{' '}
                  <FontAwesomeIcon icon={faEllipsisH} />
                </div>
                <h6 className='card-text'>{assignment.description}</h6>
                <h8 className='card-text'>
                  Available From Date: {assignment.availableFromDate}
                </h8>
                <br />

                <h8 className='card-text'>
                  Available Until Date: {assignment.availableUntilDate}
                </h8>
                <br />
                <h8 className='card-text'>Due Date: {assignment.dueDate}</h8>
              </div>
            </div>
          </div>
          // </Link>
        ))}
      </div>
    </div>
  );
}

export default Assignments;
