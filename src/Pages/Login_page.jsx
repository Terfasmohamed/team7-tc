import { useState } from 'react';

const LoginPage = () => {
  // Initialiser l'état du formulaire
  const [formData, setFormData] = useState({
    usrname: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Validate the username (usrname)
    if (!formData.usrname) {
      newErrors.usrname = 'User name is required!';
    }

    // Validate the password
    if (!formData.password) {
      newErrors.password = 'Password is required!';
    } else if (formData.password.length <= 8) {
      newErrors.password = 'Password must be more than 8 characters!';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(false);

    // Validation du formulaire avant soumission
    if (validateForm()) {
      setSubmitted(true);
      console.log('Form submitted successfully:', formData);
    }
  };

  const LoginPage = ({ login }) => {
    const [formData, setFormData] = useState({
      usrname: '',
      password: '',
    });
  
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
  
    const validateForm = () => {
      const newErrors = {};
  
      if (!formData.usrname) {
        newErrors.usrname = 'User name is required!';
      }
  
      if (!formData.password) {
        newErrors.password = 'Password is required!';
      } else if (formData.password.length <= 8) {
        newErrors.password = 'Password must be more than 8 characters!';
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(false);
  
      if (validateForm()) {
        setSubmitted(true);
        login(formData.usrname, formData.password); // Call the login function passed as a prop
      }
    };
  
    return (
      <div className="flex md:flex-row flex-col items-center justify-center h-screen w-full">
        <div className="w-1/3">
          <img src="../assets/bg_pic.png" alt="Background" />
        </div>
  
        <div className="md:w-1/4 w-1/2">
          <h2 className="text-5xl p-2">Log In</h2>
          {submitted && <p className="success-message">Login Successful!</p>}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col p-2">
              <label>User Name</label>
              <input
                type="text"
                value={formData.usrname}
                className="border-black border-2 rounded-lg"
                onChange={(e) =>
                  setFormData({ ...formData, usrname: e.target.value })
                }
              />
              {errors.usrname && (
                <p style={{ color: 'red', fontSize: '14px' }}>{errors.usrname}</p>
              )}
            </div>
            <div className="flex flex-col p-2">
              <label>Password:</label>
              <input
                type="password"
                className="border-black border-2 rounded-lg"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              {errors.password && (
                <p style={{ color: 'red', fontSize: '14px' }}>{errors.password}</p>
              )}
            </div>
            <button type="submit" className="p-2 bg-slate-700 text-white w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };
};
  export default LoginPage;