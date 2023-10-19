import ModuleList from "./ModuleList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckToSlot, faEllipsisH, faAngleDown, faPlus  } from '@fortawesome/free-solid-svg-icons'; 
import db from '../../Database';
import { Link, useParams } from 'react-router-dom';



function Modules() {
  const { courseId } = useParams();
  const assignments = db.assignments;

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
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
        <span className='breadcrumb-item active'>Modules</span>
      </nav>

      <hr />

      <div className='float-end' style={{ color: 'green' }}>


        <button style={{ marginLeft: 2, border:0}}>
          Collapse All
        </button>

        <button style={{ marginLeft: 2, border:0}}>
          View Program
        </button>

        <button style={{ marginLeft: 2, border:0}}>
        <FontAwesomeIcon icon={faCheckToSlot} style={{color: "green", marginRight:2}}/>Publish All
        </button>






        <button style={{ marginLeft: 2, border:0, background: 'red', color:'white'}}>
        <FontAwesomeIcon icon={faPlus} style={{color: "green", marginRight:2}}/>Module
        </button>

        <button style={{ marginLeft: 2, border:0 }}>
          <FontAwesomeIcon icon={faEllipsisH} />
        </button>
      </div>
      <br/>
      <hr />

      <h2>Modules</h2>
      <ModuleList />
    </div>
  );
}
export default Modules;