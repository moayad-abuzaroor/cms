import React, { useState } from "react";


function AddUser(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(); // Create a FormData object to handle file uploads

        // Add form data to the FormData object
        formData.append('username', username);
        formData.append('password', password);

        // Send the request
        fetch('http://localhost:8000/api/create_user/', {
          method: 'POST',
          body: formData,
        })
        .then(response => response.json())
        .then(data => {
          // Handle the response data if needed
          console.log('Success:', data);
          setUsername('')
          setPassword('')
        })
        .catch(error => {
          // Handle errors
          console.error('Error:', error);
        });
    }

    return(
        <div className="container-fluid bg-light" style={{ padding: '2%', height: '100%'}}>
            <div className='row'>
                <div className='col'>
                    <p className='pathText'>Administration/ <span style={{ color: 'rgb(55, 55, 55)' }}>Add User</span></p>
                </div>
            </div>

            <div className='backDiv'>
                <div className='headerDiv'>
                    <p className='headerText mt-3'>Administration</p>
                </div>           
            </div>

            <div className='row'>
                <form onSubmit={handleSubmit} className='col-lg-11 mx-auto addForm' style={{backgroundColor: 'white'}}>
                    <div className="line mt-4">
                        <p className="lineLabel">User</p>
                    </div>
                    <div className='form-row mt-4'>
                        <div className='form-group col-md-4'>
                            <label htmlFor="title" className='labelBox'>Username</label>
                            <input 
                                id="title"
                                value={username}
                                onChange={handleUsernameChange}
                                className={`form-control`} 
                            />
                        </div>
                        <div className='form-group col-md-4'>
                            <label htmlFor="title" className='labelBox'>Password</label>
                            <input 
                                id="title"
                                value={password}
                                onChange={handlePasswordChange}
                                className={`form-control`} 
                                type="password"
                            />
                        </div>
                        <div className='form-group col-md-4 mt-3'>
                            <button type="submit" className="btn btn-primary mt-3">Add</button>
                        </div>                                               
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser;