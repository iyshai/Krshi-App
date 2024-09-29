import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Sending registration data to the backend
      const response = await axios.post('http://localhost:8000/api/v1/users/register', {
        username: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword
      });

      if (response.data) {
        
        navigate('/'); 
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex bg-[#E5EAFF]">
      <div className='flex justify-center flex-col items-center min-h-screen w-[20vw] bg-[#7AD46C]'>
        <h1 className='text-[2vw] font-semibold text-black'>
          Already Here?
        </h1>
        <h2 className='text-center text-[#7E7E7E]'>
          Login and discover a great amount of new opportunities
        </h2>
        <button
          type="button"
          className="mt-10 bg-white font-bold p-3 w-[12vw] rounded-[50px] hover:bg-blue-500 text-black"
          onClick={() => navigate('/login')}
        >
          Login in
        </button>
      </div>

      <div className='flex w-[80vw] flex-col gap-10 items-center justify-center'>
        <div className="w-[28vw] h-[70vh] flex items-center pt-10 flex-col space-y-8 bg-white rounded-[15px] shadow-lg">
          <h2 className="text-3xl text-center text-black-900 font-semibold">Register Here</h2>
          {error && <div className="text-red-500">{error}</div>}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <div>
                <input
                  placeholder='Name'
                  id="name"
                  type="text"
                  className="bg-[#E5EAFF] mb-2 font-semibold text-[#C6C3C3] m-auto p-3 w-[20vw] border rounded-md"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  placeholder='Email Address'
                  id="email"
                  type="email"
                  className="bg-[#E5EAFF] mb-1 font-semibold text-[#C6C3C3] m-auto p-3 w-[20vw] border rounded-md"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  placeholder='Password'
                  id="password"
                  type="password"
                  className="bg-[#E5EAFF] font-semibold text-[#C6C3C3] mb-1 mt-1 p-3 w-[20vw] border rounded-md"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  placeholder='Confirm Password'
                  id="confirmPassword"
                  type="password"
                  className="bg-[#E5EAFF] font-semibold text-[#C6C3C3] mb-0 mt-1 p-3 w-[20vw] border rounded-md"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="mt-1 bg-[#7AD46C] font-bold p-3 w-full rounded-[50px] hover:bg-blue-500 text-black"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
