import SettingsNavigation from '../SettingsNavigation';

import { useNavigate, useParams, Link } from 'react-router-dom';
import db from '../../../Database';
import Assignments from '..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheckToSlot, faEllipsisH } from '@fortawesome/free-solid-svg-icons'; // Import the icons you need
import { faAngleDown, faPlus } from '@fortawesome/free-solid-svg-icons'; // Import the icons you need



function CourseDetails() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log('Actually saving assignment TBD in later assignments');
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>


      <div>
        <SettingsNavigation />
      </div>
      
      
    <div className='col-9'>
    <br />
      <h3>Course Details</h3>
      <br />
      <div className='d-flex'>
        <div style={{width:200 }}><b>Image:</b> </div>
        <textarea cols='50' rows='5' className='form-control'>
          please choose image
        </textarea>
        <button>Choose Image</button>
      </div>
      <br />

      <div className='d-flex'>
        <div style={{width:200 }}><b>Name:</b> </div>
        <div style={{}}>CS4550 12631 Web development SEC 01</div>
      </div>
      <br />

      <div className='d-flex'>
        <div style={{width:200 }}><b>Course Code:</b> </div>
        <div style={{}}>CS4550 12631 202410</div>
      </div>
      <br />

      <div className='d-flex'>
        <div style={{width:200 }}><b>Blueprint Course:</b> </div>
        <div style={{}}>No</div>
      </div>
      <br />

      <div className='d-flex'>
        <div style={{width:200 }}><b>Course Template</b> </div>
        <div style={{}}>Enable course as a course Template</div>
      </div>
      <br />

      <div className='d-flex'>
        <div style={{ width: 200, whiteSpace: 'nowrap' }}>
          <b>Time Zone:</b>
        </div>

        <select className='form-control' style={{ marginLeft: 50 }}>
          <option>Eastern Time US & Canada</option>
          <option>Western Time US & Canada</option>
        </select>
      </div>
      <br />

      <div className='d-flex'>
        <div style={{width:200 }}><b>Subaccount:</b> </div>
        <div style={{color: 'red'}}>CS Undergrad</div>
      </div>
      <br />

      <div className='d-flex'>
        <div style={{width:200 }}><b>Term:</b> </div>
        <div style={{}}>2024_1 Fall 2023 Semester</div>
      </div>
      <br />


      <div className='d-flex'>
        <div style={{ width: 200, whiteSpace: 'nowrap' }}>
          <b>Participation:</b>
        </div>

        <select className='form-control' style={{ marginLeft: 50 }}>
          <option>Term</option>
          <option>Quarter</option>
        </select>
      </div>
      <br />


      <div className='d-flex'>
        <div style={{ width: 200}}></div>

        <div style={{}}>
          <div className='row'>
            <b>Start</b>
            <input type='date' value='2022-10-17' className='form-control' />
          </div>
          <br />
          <div className='row'>
            <b>End</b>
            <input type='date' value='2022-10-17' className='form-control' />
          </div>

          <br />

        </div>
      </div>
      <br />

      




      <input
        type='checkbox'
        id='textEntry'
        className='form-check-input'
        style={{ marginLeft: 160, marginRight: 20 }}
      />
      restrict students from viewing course before term start date

      <input
        type='checkbox'
        id='textEntry'
        className='form-check-input'
        style={{ marginLeft: 160, marginRight: 20 }}
      />
      restrict students from viewing course before term end date
      <br />
      <br />

      <div className='d-flex'>
        <div style={{ width: 200, whiteSpace: 'nowrap' }}>
          <b>default due time:</b>
        </div>

        <select className='form-control' style={{ marginLeft: 50 }}>
          <option>Account Default</option>
          <option>Account</option>
        </select>
      </div>
      <br />



      <div className='d-flex'>
        <div style={{ width: 200, whiteSpace: 'nowrap' }}>
          <b>Language:</b>
        </div>

        <select className='form-control' style={{ marginLeft: 50 }}>
          <option>English</option>
          <option>Chinese</option>
        </select>
      </div>
      <br />

      <div className='d-flex'>
        <div style={{width:200 }}><b>File Storage</b> </div>
        <div style={{}}>10000 Magabutes</div>
      </div>
      <br />


      <div className='d-flex'>
        <div style={{width:200 }}><b>Large Course</b> </div>
        <input
        type='checkbox'
        id='textEntry'
        className='form-check-input'
        style={{}}
      />
      launch speedgrader filtered by student group      </div>
      <br />

      <div className='d-flex'>
        <div style={{width:200 }}><b>Description:</b> </div>
        <textarea cols='50' rows='5' className='form-control'>
          please choose image
        </textarea>
      </div>
      <br />
      <hr/>

      <br />
      <div className='d-flex'>

        <Link
          to={`/Kanbas/Courses/${courseId}/Settings`}
          style={{marginLeft:500, width:100, fontSize:1}}
        >
          <button className='btn btn-danger' style={{width:200, fontSize:15}}>Upload Course Details</button>
        </Link>

      </div>
    </div>



    </div>
  );
}
export default CourseDetails;
