import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCheckToSlot } from '@fortawesome/free-solid-svg-icons'; 
import {
  faPlus,
  faCheck,
  faEllipsisH,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import './index.css';


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  const finalCourseId = courseId ?  courseId : db.courses[0]["_id"];


  return (
    <ul className="list-group">
      {
       modules
         .filter((module) => module.course === finalCourseId)
         .map((module, index) => (
          <div className="top-container">


          <div style={{width : 800}}>
           <li key={index} className="list-group-item">
            
             <h6><b>{module.name}</b></h6>
             <p>{module.description}            <div className='float-end'>
                  <FontAwesomeIcon
                    icon={faCheckToSlot}
                    style={{ color: 'green' }}
                  />{' '}
                  <FontAwesomeIcon icon={faEllipsisH} />
            </div></p>
             
           </li>
           
           </div>


           </div>

      ))
      }
    </ul>
  );
}
export default ModuleList;