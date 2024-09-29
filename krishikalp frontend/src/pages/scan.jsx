import { useState } from 'react';
import axios from 'axios';
import './scanstyle.css';
import scanimage from '../assets/scan.png';
import mainscan from '../assets/mainscan.jpg';

export default function Scan() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [scanResult, setScanResult] = useState(''); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
  
      const formData = new FormData();
      formData.append('imageFile', file); // Use 'imageFile' as the field name
  
      try {
        setLoading(true);
        setError(null); // Clear previous errors
        const response = await axios.post(
          'https://supreme-margi-rauhan-911ebc59.koyeb.app/smartLens',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
  
        // Assuming the response contains the result in a 'response' field
        setScanResult(response.data.response || 'No result found.');
      } catch (err) {
        console.error('Full error:', err); // Log the full error response
        setError(err.response?.data?.message || 'Failed to scan image. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };
  

  return (
    <>
      <div className="scanmain">
        <div className="scanpartmain">
            <div className="upperscan">

          
          <div className="uploadimagepart">
            <label className="image-upload-label">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="image-upload-input"
              />
              <img
                src={uploadedImage ? uploadedImage : mainscan}
                alt="Uploaded"
                className="uploaded-image"
              />
            </label>

          </div>
          <div className="scanimagepart">
            <img src={scanimage} alt="Scan default" />
          </div>

          </div>

          

          <div className="resultpart">
            <h1>RESULT</h1>
            {loading ? (
              <h2>Scanning...</h2>
            ) : error ? (
              <h2 className="text-red-500">{error}</h2>
            ) : (
              <h2>{scanResult}</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

