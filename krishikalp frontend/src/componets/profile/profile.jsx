import './profilestyle.css'
import 'remixicon/fonts/remixicon.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';


export default function Profile({ isOpen }) {
    const navigate = useNavigate();
  
    const handleClick = (path) => {
      navigate(path, { replace: true });
    };
  
    if (!isOpen) {
      return null; // If isOpen is false, do not render the component
    }
  
    return (
      <div className="profileMain">
        <div className="profilepart">
          <i className="ri-user-fill"></i>
          <h1>Profile</h1>
        </div>
        <div className="profilepart">
          <i className="ri-shopping-bag-3-fill"></i>
          <h1>Orders</h1>
        </div>
        <div className="profilepart">
          <i className="ri-settings-4-fill"></i>
          <h1>Setting</h1>
        </div>
        <div className="profilepart" onClick={() => handleClick('/login')}>
          <i className="ri-logout-box-fill" ></i>
          <h1>Logout</h1>
        </div>
      </div>
    );
  }
  
  Profile.propTypes = {
    isOpen: PropTypes.bool.isRequired, // Ensure isOpen is a boolean and required
  };
  