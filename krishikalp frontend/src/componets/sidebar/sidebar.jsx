import './sidebarstyle.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


function Sidebar({ isOpen }) {

    const navigate = useNavigate();

    const handleClick = (path) => {
      navigate(path, { replace: true });
    };
  return (
    <div className={`sidebar ${isOpen ? 'slide-in' : 'slide-out'}`}>
      <div className="sidebaritem" onClick={() => handleClick('/')}>
        <i className="ri-home-2-line"></i>
        <h1 className=" font-medium  ml-2">Home</h1>
      </div>

      <div className="sidebaritem" onClick={() => handleClick('/scan')}>
      <i className="ri-qr-scan-2-line"></i>
        <h1 className=" font-semibold ml-2">Scan</h1>
      </div>

      <div className="sidebaritem" onClick={() => handleClick('/weather')}>
      <i className="ri-cloud-line"></i>
        <h1 className=" font-semibold ml-2">Mosam</h1>
      </div>

      <div className="sidebaritem" onClick={() => handleClick('/marketprice')}>
      <i className="ri-money-rupee-circle-line"></i>
        <h1 className=" font-semibold ml-2">Mandi dam</h1>
      </div>
      <div className="sidebaritem" onClick={() => handleClick('/community')}>
      <i className="ri-community-line"></i>
        <h1 className=" font-medium  ml-2">Sampark</h1>
      </div>

      <div className="sidebaritem" onClick={() => handleClick('/ecommerse')}>
      <i className="ri-store-2-line"></i>
        <h1 className=" font-semibold ml-2">Dukaan</h1>
      </div>

      <div className="sidebaritem" onClick={() => handleClick('/yojna')}>
      <i className="ri-news-line"></i>
        <h1 className=" font-semibold ml-2">yojna</h1>
      </div>

      <div className="sidebaritem" onClick={() => handleClick('finanace')}>
      <i className="ri-database-2-line"></i>
        <h1 className=" font-semibold ml-2">Dhan Sahayta</h1>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired, // Ensure isOpen is a boolean and required
  };

export default Sidebar;

