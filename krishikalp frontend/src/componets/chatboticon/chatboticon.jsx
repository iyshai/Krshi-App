
import './chatboticonstyle.css'
import { useNavigate } from 'react-router-dom';

export default function Chatboticon() {

  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path, { replace: true });
  };
  

  return (
    <>
       
       
       <div className="chatboticon" onClick={() => handleClick('/chatbot')}>
           <i className="ri-robot-3-fill"></i>
       </div>
    </>
  )
}

