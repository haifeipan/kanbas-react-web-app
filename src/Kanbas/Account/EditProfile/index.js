import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'; 
import { faUser } from '@fortawesome/free-solid-svg-icons';

function EditProfile() {
  return (
    <div className='container mt-4'>
      <div className='top-container'>
        <div className='profile-icon'>
          <FontAwesomeIcon icon={faUser} size='4x' />
        </div>
        <Link to='../Profile'>
          <button className='btn'>
            <FontAwesomeIcon icon={faPencilAlt} />
            Cancel Editing
          </button>
        </Link>
      </div>

      <form>
        <div className='mb-3'>
          <label for='name' className='form-label'>
            Name
          </label>
          <input type='text' className='form-control' id='name' />
        </div>
        <div className='mb-3'>
          <label htmlFor='pronouns' className='form-label'>
            Pronouns
          </label>
          <select className='form-select' id='pronouns'>
            <option value='he_him'>He/Him</option>
            <option value='she_her'>She/Her</option>
            <option value='they_them'>They/Them</option>
            <option value='other'>Other</option>
          </select>
        </div>

        <div className='mb-3'>
          <label for='title' className='form-label'>
            Title
          </label>
          <input type='text' className='form-control' id='title' />
        </div>
        <div className='mb-3'>
          <h3>Contact</h3>
          No registered services, you can add some on the{' '}
          <a href='javascript:void(0)' style={{ color: 'red' }}>
            settings{' '}
          </a>{' '}
          page.
        </div>
        <div className='mb-3'>
          <label for='biography' className='form-label'>
            Biography
          </label>
          <textarea
            className='form-control'
            id='biography'
            defaultValue='please edit your biography'
          ></textarea>
        </div>
        <div className='mb-3'>
          <h3>Links</h3>
          <div className='row'>
            <div className='col'>
              <label for='linkTitle' className='form-label'>
                Title
              </label>
              <input type='text' className='form-control' id='linkTitle' />
              <Link>
                <button className='bnt bnt-cancel'>Add another link</button>
              </Link>
            </div>
            <div className='col'>
              <label for='linkURL' className='form-label'>
                URL
              </label>
              <input type='text' className='form-control' id='linkURL' />
            </div>
          </div>
        </div>
      </form>

      <Link to='../Profile' className='cancel-button'>
        <button className='bnt bnt-cancel'>Cancel</button>
      </Link>

      <Link to='../Profile'>
        <button className='btn btn-danger'>Save Profile</button>
      </Link>
    </div>
  );
}
export default EditProfile;
