import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faBook,
  faCheckToSlot,
  faFileImport,
  faPager,
  faComputerMouse,
  faNewspaper,
  faDatabase,
  faMessage,
  faCirclePause,
  faCalendar
} from '@fortawesome/free-solid-svg-icons';


function Status() {
    return (
  <div  className="status-container">
    <h5>Course Status</h5>
    <div class='publish-container'>
        <button className='publish'><FontAwesomeIcon icon={faCirclePause} />unpublish</button>
        <button className="unpublish"><FontAwesomeIcon icon={faCheckToSlot} />publish</button>
    </div>
    <br/>

    <ul>
      <li>
        {/* <a href='javascript:void(0)'>Import Existing Content</a> */}
        <button style={{border:"0"}}>
        <FontAwesomeIcon icon={faFileImport} /> Import Existing Content
      </button>
      </li>


      <li>
        {/* <a href='javascript:void(0)'>Import From Commons</a> */}
        <button style={{border:"0"}}>
        <FontAwesomeIcon icon={faFileImport} /> Import From Commons      </button>
      </li>


      <li>
        {/* <a href='javascript:void(0)'>Choose Home Page</a> */}
        <button style={{border:"0"}}>
        <FontAwesomeIcon icon={faPager} />Choose Home Page      </button>
      </li>
      <li>
        {/* <a href='javascript:void(0)'>View Course Stream</a> */}
        <button style={{border:"0"}}>
        <FontAwesomeIcon icon={faComputerMouse} />View Course Stream      </button>
      </li>
      <li>
        {/* <a href='javascript:void(0)'>New Announcement</a> */}
        <button style={{border:"0"}}>
        <FontAwesomeIcon icon={faNewspaper} />New Announcement      </button>
      </li>
      <li>
        {/* <a href='javascript:void(0)'>New Analytics</a> */}
        <button style={{border:"0"}}>
        <FontAwesomeIcon icon={faDatabase} />New Analytics      </button>
      </li>

      <li>
        {/* <a href='javascript:void(0)'>View Course Notifications</a> */}
        <button style={{border:"0"}}>
        <FontAwesomeIcon icon={faMessage} />View Course Notifications      </button>
      </li>
    </ul>

    <h6><b>To do</b></h6>
    <hr/>
    <a href='javascript:void(0)' style={{color: 'red', marginLeft:1, textDecoration: 'none' }}><FontAwesomeIcon icon={faBook} style={{color: 'black', marginRight: 5}}/>Grade A1 - ENV + HTML</a>
    <br/>

    <a href='javascript:void(0)' style={{color: 'red', marginLeft:1, textDecoration: 'none' }}><FontAwesomeIcon icon={faBook} style={{color: 'black', marginRight: 5}}/>Grade A2 - CSS + BOOTSTRAP</a>
    <br/>
    <br/>



    <div class='publish-container'>
      <div>
      <h6><b>Comming Up</b></h6>
      </div>

      <div>
      <a href='javascript:void(0)' style={{color: 'red', marginLeft:30, textDecoration: 'none' }}><FontAwesomeIcon icon={faCalendar} style={{color: 'black', marginRight: 5}}/>View Calendar</a>
      </div>
    </div>

    <hr/>
    <a href='javascript:void(0)' style={{color: 'red', marginLeft:1, textDecoration: 'none' }}><FontAwesomeIcon icon={faCalendar} style={{color: 'black', marginRight: 5}}/>CS4550.12631.202410 Sep 7</a>
    <br/>

    <a href='javascript:void(0)' style={{color: 'red', marginLeft:1, textDecoration: 'none' }}><FontAwesomeIcon icon={faCalendar} style={{color: 'black', marginRight: 5}}/>CS4550.12631.202410 Sep 11</a>
    <br/>
    <a href='javascript:void(0)' style={{color: 'red', marginLeft:1, textDecoration: 'none' }}><FontAwesomeIcon icon={faCalendar} style={{color: 'black', marginRight: 5}}/>CS5610 06 SP23 Iecture Sep 11</a>
    <br/>





  </div>);
}
export default Status;

