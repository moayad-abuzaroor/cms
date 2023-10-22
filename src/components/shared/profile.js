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
        <form onSubmit={handleSubmit}>
          <div>
            <label>Old Password:</label>
            <input
              type="password"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>New Password:</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Confirm New Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Change Password</button>
        </form>
      );
    }

export default Profile;
