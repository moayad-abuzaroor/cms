import React, { useState } from 'react';

function Profile() {
    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const token = localStorage.getItem('token')
      console.log(token)
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (formData.newPassword !== formData.confirmPassword) {
          alert('New passwords do not match.');
          return;
        }
    
        try {
          const response = await fetch('http://localhost:8000/api/change_password/', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`
            },
            body: JSON.stringify({
              old_password: formData.oldPassword,
              new_password: formData.newPassword,
            }),
          });
    
          if (!response.ok) {
            //const errorData = await response.json();
            alert('Passwords is not corrects');
          } else {
            alert('Password changed successfully!');
          }
        } catch (error) {
          console.error('Error changing password:', error);
        }
      };
    
    
      return (
        <div className="container-fluid bg-light" style={{ padding: '2%', height: '100%'}}>
          <div className='row'>
              <div className='col'>
                  <p className='pathText'>Profile/ <span style={{ color: 'rgb(55, 55, 55)' }}>My Account</span></p>
              </div>
          </div>
          <div className='backDiv'>
              <div className='headerDiv'>
                  <p className='headerText mt-3'>My Account</p>
              </div>           
          </div>
          <div className='row'>
            <form onSubmit={handleSubmit} className='col-lg-11 mx-auto addForm' style={{backgroundColor: 'white'}}>
              <div className="line mt-1">
                  <p className="lineLabel">Edit Password</p>
              </div>
              <div className='form-row mt-4'>
                <div className='form-group col-md-4'>
                  <label className='labelBox'>Current Password</label>
                  <input
                    className={`form-control`} 
                    type="password"
                    name="oldPassword"
                    value={formData.oldPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='form-row'>
                <div className='form-group col-md-4'>
                  <label className='labelBox'>New Password:</label>
                  <input
                    className={`form-control`}
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='form-row'>
                <div className='form-group col-md-4'>
                  <label className='labelBox'>Confirm New Password:</label>
                  <input
                    className={`form-control`}
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-1">Change Password</button>
            </form>
          </div>
        </div>
        
      );
    }

export default Profile;
