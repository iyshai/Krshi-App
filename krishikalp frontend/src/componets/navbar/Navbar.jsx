import 'remixicon/fonts/remixicon.css';
import './navbarstyle.css';
import Logo from '../../assets/logo.png';
import Sidebar from '../sidebar/sidebar';
import { useState } from 'react';
import Profile from '../profile/profile';
import Notification from '../notification/notification';

export default function Navbar() {
  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotiOpen, setIsNotiOpen] = useState(false);
  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleNoti = () => {
    setIsNotiOpen(!isNotiOpen);
  };


  return (
    <>
      {/* Pass the sidebar open/close state to the Sidebar component */}
      <Sidebar isOpen={isSidebarOpen} />
      <Profile isOpen={isProfileOpen} />
      <Notification isOpen={isNotiOpen} />


      <div className='navbar'>
        <div className="nav-rightside">
          <div className="navbarcircle" onClick={toggleSidebar}>
            <i className="ri-menu-line"></i>
          </div>
        </div>
        <div className="nav-midside">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav-leftside">
          <div className="navbarcircle" onClick={toggleNoti}>
            <i className="ri-notification-line"></i>
          </div>
          <div className="navbarcircle" onClick={toggleProfile}>
            <i className="ri-user-line" ></i>
          </div>
        </div>
      </div>
    </>
  );
}




