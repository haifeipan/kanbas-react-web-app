import SettingsNavigation from '../SettingsNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCheckToSlot } from '@fortawesome/free-solid-svg-icons'; 
import {
  faPlus,
  faCheck,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';


function Navigation() {
  return (
    <div>
      <div>
        <SettingsNavigation />
      </div>
      <br/>


      <div>
        Drag and drop items to reorder them in the course navigation.
        <br/>
        <br/>

      <ul className='list-group'>

          <li className='list-group-item'>
            Home <button className='float-end btn' ><FontAwesomeIcon icon={faEllipsisH} /></button>
          </li>

          <li className='list-group-item'>
            Modules <button className='float-end btn' ><FontAwesomeIcon icon={faEllipsisH} /></button>
          </li>

          <li className='list-group-item'>
            Piazza <button className='float-end btn' ><FontAwesomeIcon icon={faEllipsisH} /></button>
          </li>

          <li className='list-group-item'>
            Zoom Meetings <button className='float-end btn' ><FontAwesomeIcon icon={faEllipsisH} /></button>
          </li>

          <li className='list-group-item'>
            Assignments <button className='float-end btn' ><FontAwesomeIcon icon={faEllipsisH} /></button>
          </li>

          <li className='list-group-item'>
            Assignments <button className='float-end btn' ><FontAwesomeIcon icon={faEllipsisH} /></button>
          </li>

          <li className='list-group-item'>
            Quizzes <button className='float-end btn' ><FontAwesomeIcon icon={faEllipsisH} /></button>
          </li>

          <li className='list-group-item'>
            Grades <button className='float-end btn' ><FontAwesomeIcon icon={faEllipsisH} /></button>
          </li>

          <li className='list-group-item'>
            People <button className='float-end btn' ><FontAwesomeIcon icon={faEllipsisH} /></button>
          </li>

          <li className='list-group-item'>
            Panopto Video <button className='float-end btn' ><FontAwesomeIcon icon={faEllipsisH} /></button>
          </li>
      </ul>
      </div>


    </div>
  );
}
export default Navigation;
