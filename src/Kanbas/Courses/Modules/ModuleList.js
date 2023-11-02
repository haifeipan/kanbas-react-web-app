import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../Database';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import './index.css';

import { useSelector, useDispatch } from 'react-redux';
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from './modulesReducer';

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const finalCourseId = courseId ? courseId : db.courses[0]['_id'];

  return (
    <div>
      <div>
        <div>
          <input
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
            style={{width:500}}
          />
        </div>

        <div>
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
            style={{width:500}}

          />
        </div>

        <button
          className='btn btn-success btn-sm'
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}
        >
          Add
        </button>

        <button
          style={{ marginLeft: 10 }}
          className='btn btn-primary btn-sm'
          onClick={() => dispatch(updateModule(module))}
        >
          Update
        </button>
      </div>
      
      <hr/>

      <div>
        <ul className='list-group'>
          {modules
            .filter((module) => module.course === finalCourseId)
            .map((module, index) => (
              <div className='top-container'>
                <div style={{ width: 800 }}>
                  <li key={index} className='list-group-item'>
                    <h7>
                      <b>{module.name}</b>
                      <div className='float-end'>
                        <button
                          style={{ marginLeft: 10, marginRight: 10 }}
                          className='btn btn-warning btn-sm'
                          onClick={() => dispatch(setModule(module))}
                        >
                          Edit
                        </button>
                        <button
                          style={{ marginRight: 30 }}
                          className='btn btn-danger btn-sm'
                          onClick={() => dispatch(deleteModule(module._id))}
                        >
                          Delete
                        </button>
                        <FontAwesomeIcon
                          icon={faCheckToSlot}
                          style={{ color: 'green' }}
                        />{' '}
                        <FontAwesomeIcon icon={faEllipsisH} />
                      </div>
                    </h7>


                    <p>
                    {module.description}{' '}
                    </p>
                  </li>
                </div>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
}
export default ModuleList;
