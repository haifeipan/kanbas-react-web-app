import { useNavigate, useParams, Link } from 'react-router-dom';
import db from '../../../Database';
import Assignments from '..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheckToSlot, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { useSelector, useDispatch } from 'react-redux';
import {
  addNewAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setNewAssignment,
  initiateAssignment,
} from '../assignmentsReducer';
import * as client from "../client";

function AssignmentEditor() {
  const { assignmentId } = useParams();

  const handleUpdateAssignment = async () => {
    const status = await client.updateAssignment(assignment);
    // await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };


  // const handleUpdateAssignment = () => {
  //   client.updateAssignment(assignment).then((assignment) => {
  //     dispatch(updateAssignment(assignment));
  //   });
  // };

  // const assignment = db.assignments.find(
  //   (assignment) => assignment._id === assignmentId
  // );

  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );

  const newAssignment = useSelector(
    (state) => state.assignmentsReducer.newAssignment
  );

  const isAdd = useSelector((state) => state.assignmentsReducer.isAdd);

  const dispatch = useDispatch();

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log('Actually saving assignment TBD in later assignments');
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  // assignment = {...assignment, course: courseId}


  return (
    <div className='col-9'>
      <nav className='breadcrumb'>
        <Link
          to={`/Kanbas/Courses/${courseId}/Home`}
          className='breadcrumb-item'
          style={{ color: 'red', textDecoration: 'none' }}
        >
          {assignment.course}
        </Link>
        <span className='breadcrumb-arrow'>&rarr;</span>

        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className='breadcrumb-item'
          style={{ color: 'red', textDecoration: 'none' }}
        >
          Assignments
        </Link>
        <span className='breadcrumb-arrow'>&rarr;</span>

        <span className='breadcrumb-item active'>{assignment.title}</span>
      </nav>
      <div className='float-end' style={{ color: 'green' }}>
        <FontAwesomeIcon icon={faCheckToSlot} style={{ marginRight: 10 }} />
        <span>published</span>

        <button style={{ marginLeft: 10 }}>
          <FontAwesomeIcon icon={faEllipsisH} />
        </button>
      </div>
      <br />
      <h6>Assignment Name</h6>
      <input
        type='text'
        // value='A1 - ENV + HTML'
        value={assignment.title}

        id='assignmentName'
        onChange={(e) =>
          dispatch(setAssignment({ ...assignment, title: e.target.value }))
        }
        className='form-control'
      />
      <br />
      <h6>Assignment Description</h6>
      <textarea
        value={assignment.description}
        onChange={(e) =>
          dispatch(
            setAssignment({ ...assignment, description: e.target.value })
          )
        }
        cols='50'
        rows='5'
        className='form-control'
      ></textarea>
      <br />
      <div className='d-flex'>
        <div style={{ marginLeft: 100 }}>Points </div>
        <input
          // value= '100'
          placeholder='100'
          type='text'
          className='form-control'
          style={{ marginLeft: 20 }}
        />
      </div>
      <br />
      <div className='d-flex'>
        <div style={{ marginLeft: 3, whiteSpace: 'nowrap' }}>
          Assignment Group
        </div>

        <select className='form-control' style={{ marginLeft: 20 }}>
          <option>Assignments1</option>
          <option>Assignments2</option>
          <option>Assignments3</option>
          <option>Assignments4</option>
          <option>Assignments5</option>
        </select>
      </div>
      <br />
      <div className='d-flex'>
        <div style={{ marginLeft: 18, whiteSpace: 'nowrap' }}>
          Display Grade as
        </div>

        <select className='form-control' style={{ marginLeft: 20 }}>
          <option>percentage</option>
          <option>score</option>
        </select>
      </div>
      <br />
      <input
        type='checkbox'
        id='textEntry'
        className='form-check-input'
        style={{ marginLeft: 160, marginRight: 20 }}
      />
      Do not count this assignment towards the fnal grade
      <br />
      <br />
      <br />
      <div className='d-flex'>
        <div style={{ marginLeft: 15, whiteSpace: 'nowrap' }}>
          Submission Type
        </div>

        <div>
          <select
            className='form-control'
            style={{ marginLeft: 20, width: 500 }}
          >
            <option>online</option>
            <option>in-person</option>
          </select>

          <div style={{ marginLeft: 20, width: 500 }}>
            <br />
            <br />
            <br />
            <h5>
              <b>Online Entry Options</b>
            </h5>
            <input
              type='checkbox'
              id='textEntry'
              className='form-check-input'
            />
            Text Entry
            <br />
            <input
              type='checkbox'
              defaultChecked
              className='form-check-input'
            />
            Website URL <br />
            <input
              type='checkbox'
              defaultChecked
              className='form-check-input'
            />
            Media Recordings
            <br />
            <input
              type='checkbox'
              defaultChecked
              className='form-check-input'
            />
            Student Annotation
            <br />
            <input
              type='checkbox'
              defaultChecked
              className='form-check-input'
            />
            File Uploads
            <br />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className='d-flex'>
        <div style={{ marginLeft: 90, whiteSpace: 'nowrap' }}>Assign</div>

        <div style={{ marginLeft: 90 }}>
          <div className='row'>
            <b>Assign to</b>
            <select className='form-control'>
              <option>unlimited</option>
              <option>limited</option>
            </select>
          </div>
          <br />
          <div className='row'>
            <b>Due</b>
            <input
              type='date'
              // value='2022-10-17'
              value={assignment.dueDate}
              onChange={(e) =>
                dispatch(
                  setAssignment({ ...assignment, dueDate: e.target.value })
                )
              }
              className='form-control'
            />
          </div>

          <br />
          <div className='row'>
            <div className='d-flex'>
              <div>
                <b>Available from</b>
                <input
                  type='date'
                  // value='2023-10-17'
                  value={assignment.availableFromDate}
                  onChange={(e) =>
                    dispatch(
                      setAssignment({
                        ...assignment,
                        availableFromDate: e.target.value,
                      })
                    )
                  }
                  className='form-control'
                />
              </div>
              <div>
                <b>Until</b>
                <input
                  type='date'
                  // value='2023-10-17'
                  value={assignment.availableUntilDate}
                  onChange={(e) =>
                    dispatch(
                      setAssignment({
                        ...assignment,
                        availableUntilDate: e.target.value,
                      })
                    )
                  }
                  className='form-control'
                />
              </div>
            </div>
          </div>

          <br />
          <div className='row'>
            <button>
              <FontAwesomeIcon icon={faPlus} /> Add
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className='d-flex'>
        <div className='col-6' style={{ width: 500 }}>
          <input type='checkbox' id='textEntry' className='form-check-input' />
          Notify users that this content has changed
        </div>

        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          style={{ marginRight: 20 }}
        >
          <button className='btn btn-secondary'>Cancel</button>
        </Link>

        {/* {isAdd ? (
          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            style={{ marginRight: 20 }}
          >
            <button
              className='btn btn-danger'
              onClick={() => dispatch(addAssignment(assignment))}
            >
              Save
            </button>
          </Link>
        ) : (
          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            style={{ marginRight: 20 }}
          >
            <button
              className='btn btn-primary'
              onClick={() => dispatch(updateAssignment(assignment))}
            >
              Save
            </button>
          </Link>
        )} */}

        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          style={{ marginRight: 20 }}
        >
          <button 
          className='btn btn-danger'
          // onClick={() => dispatch(updateAssignment(assignment))}
          onClick={() => handleUpdateAssignment(assignment)}

          >Save</button>
        </Link>
      </div>
    </div>
  );
}

export default AssignmentEditor;
