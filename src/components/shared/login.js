import React, { useState } from "react";
import { Link, useHistory, useNavigate } from "react-router-dom";
import bg from '../../images/login.jpg'

function Login() {
    const [users, setUsers] = useState([
        {
          username: 'moayad',
          password: '123'
        }
      ]);

      const[invalidMsg, setInvalidMsg] = useState(false);
    
      const navigate = useNavigate();
    
      const handleLogin = (e) => {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
    
        const user = users.find(user => user.username === username && user.password === password);        
    
        if (user) {
          console.log("User logged in:", user.username);
          // Navigate to the dashboard
          navigate("/dashboard");
        } else {
          setInvalidMsg(true);
        }
      };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <img className="col-lg-6 d-none d-lg-block" src={bg} />
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome to CMS!</h1>
                    </div>
                    <form className="user" onSubmit={handleLogin}>
                      <div className="form-group">
                        <input type="text" className="form-control form-control-user"
                          name="username" aria-describedby="emailHelp"
                          placeholder="User Name" />                          
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control form-control-user"
                          name="password" placeholder="Password" />
                          {invalidMsg && <div className='text-danger small mt-1'>Invalid username or password. Please try again.</div>}
                      </div>
                      
                      <button type="submit" className="btn btn-primary btn-user btn-block">
                        Login
                      </button>                      
                      <hr />
                    </form>
                    <div className="text-center">
                      <a className="small" href="forgot-password.html">Forgot Password?</a>
                    </div>
                    <div className="text-center">
                      <Link className="small" to="/register">Create an Account!</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
