import './index.css'; 
import EditProfile from '../EditProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import { Routes, Route, Navigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

function Profile() {
  return (
    <div>
      <br />
      <br />

      <div className='top-container'>


      <div className='profile-icon'>
        <FontAwesomeIcon icon={faUser} size='4x' / >

      </div>
        <Link to='../EditProfile' >
            <button className='btn' >
              <FontAwesomeIcon icon={faPencilAlt} />
              Edit Profile
              </button>
        </Link>

      </div>


      <br />
      <h1>Haifei Pan</h1>
      <br />
      <br />
      <br />
      <h2>Contact</h2>
      No registered services, you can add some on the{' '}
      <a href='javascript:void(0)' style={{ color: 'red' }}>
        settings{' '}
      </a>{' '}
      page.
      <br />
      <br />
      <h2>Biography</h2>
      software engineer
      <br />
      <br />
      <h2>Link</h2>
      <a href='javascript:void(0)' style={{ color: 'red' }}>
        YouTube
      </a>

    </div>
  );
}
export default Profile;
