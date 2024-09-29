
import './home.css'
import { useNavigate } from 'react-router-dom';


export default function Home() {

  
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path, { replace: true });
  };
  

  return (

   
    <>
       
      <div className="homemidpart">
        <div className="searchpart">
           <div className="textparthome">

           <i className="ri-search-line" ></i>

           <textarea
            placeholder="Enter your symptoms..."
           
          ></textarea>
          <i className="ri-mic-line"></i>
           </div>

           <div className="sendparthome" onClick={() => handleClick('/scan')}>
           <i className="ri-qr-scan-2-line"></i>
           </div>
           </div>

           <div className="languagepart">
              <div className="lang1">
                <h1>English</h1>
              </div>

              <div className="lang1">
                <h1>Hindi</h1>
              </div>

              <div className="lang1">
                <h1>Malyalam</h1>
              </div>

              <div className="lang1">
                <h1>Tamil</h1>
              </div>

              <div className="lang1">
                <h1>Telugu</h1>
              </div>
           </div>
      </div>


      <div className="homebottompart">
             <div className="bottompart" onClick={() => handleClick('/weather')}>
             <i className="ri-cloud-line" ></i>
             </div>

             <div className="bottompart" onClick={() => handleClick('/')}>
             <i className="ri-money-rupee-circle-line" ></i>
             </div>

             <div className="bottompart" onClick={() => handleClick('/community')}>
             <i className="ri-community-line" ></i>
             </div>

          

             <div className="bottompart" onClick={() => handleClick('/ecommerse')}>
             <i className="ri-store-2-line" ></i>
             </div>

             <div className="bottompart" onClick={() => handleClick('/yojna')}>
             <i className="ri-news-line" ></i>
             </div>

             <div className="bottompart" onClick={() => handleClick('/finanace')}>
             <i className="ri-database-2-line" ></i>
             </div>


      </div>
      
    </>
  )
}