import { React, useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import courseImage from '../../resources/images/course_image.png';
import db from '../Database';
const courses = db.courses;

const Dashboard = ({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) => {
  return (
    <div className='dashboard'>
      <h1 className='dashboard-title'>Dashboard</h1>
      <hr />
      <h2 className='sub-title'>Published Courses ({courses.length})</h2>
      <hr />
      <div className='container'>
        <div className='row'>
          <div
            className='list-group'
            style={{
              width: 500,
            }}
          >
            {courses.map((course) => (
              <Link
                key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className='list-group-item'
              >
                <div class='row'>
                  <div class='col-7'>{course.name}</div>
                  <div class='col-2'>
                    {' '}
                    <button
                      className='btn btn-warning btn-sm'
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                  <div class='col-2'>
                    {' '}
                    <button
                      className='btn btn-danger btn-sm'
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {/* {course.name}

            <button
              className='btn btn-warning btn-sm'
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}
            >
              Edit
            </button>

            <button
              style={{
                marginLeft: 10,
              }}
              className='btn btn-danger btn-sm'
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}
            >
              Delete
            </button> */}
              </Link>
            ))}
          </div>

          <div
            style={{
              width: 400,
            }}
          >
            {' '}
            <input
              value={course.name}
              className='form-control'
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
            <input
              value={course.number}
              className='form-control'
              onChange={(e) => setCourse({ ...course, number: e.target.value })}
            />
            <input
              value={course.startDate}
              className='form-control'
              type='date'
              onChange={(e) =>
                setCourse({ ...course, startDate: e.target.value })
              }
            />
            <input
              value={course.endDate}
              className='form-control'
              type='date'
              onChange={(e) =>
                setCourse({ ...course, endDate: e.target.value })
              }
            />
            <button className='btn btn-success btn-sm' onClick={addNewCourse}>
              Add
            </button>
            <button style = {{marginLeft:10}} className='btn btn-primary btn-sm' onClick={updateCourse}>
              Update
            </button>
          </div>
        </div>
      </div>
      <br/>
      <hr />
      <br/>
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
                  <p>
                    <FontAwesomeIcon icon={faBook} />
                  </p>
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
