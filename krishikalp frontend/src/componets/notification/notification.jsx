import './notificationstyle.css'
import PropTypes from 'prop-types';

export default function Notification({isOpen}) {

    if (!isOpen) {
        return null; // If isOpen is false, do not render the component
      }
    
  return (
    <div className="notiMain">
       <div className="notifications">
         <h1>Abhi dekhe mosaam ho skta h aj barish ho</h1>
         
       </div>

       <div className="notifications">
         <h1>Dekho abhi mandi daam price bahut kam kr di gai hai</h1>
         
       </div>

       <div className="notifications">
         <h1>Bimar check karo abhi scan ki madat se.</h1>
         
       </div>
    </div>
  )
}

Notification.propTypes = {
    isOpen: PropTypes.bool.isRequired, // Ensure isOpen is a boolean and required
  };
