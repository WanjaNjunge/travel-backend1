import React, { useState } from 'react';
import axios from 'axios';
// import './EditUserProfile.css';

const EditUserProfile = ({ userData }) => {
  const [editedUserData, setEditedUserData] = useState(userData || {}); // Initialize as empty object if userData is null
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateProfile = () => {
    setIsLoading(true);
    // Send the updated user data to the server
    axios.put(`/users/${userData.id}`, editedUserData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then(response => {
      setSuccessMessage('Profile updated successfully');
      setEditedUserData({}); 
      setIsLoading(false);
    })
    .catch(error => {
      setErrorMessage('Error updating profile');
      setIsLoading(false);
    });
  };

  return (
    <div className="edit-user-profile-container">
      <h1 className="profile-heading">
               Edit <span>Profile</span>
            </h1>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="edit-user-profile-fields">
      <div className="field">
            <label>UserName:</label>
            <input
            type="text"
            name="username"
            value={editedUserData.username}
            onChange={handleInputChange}
            />
        </div>
        <div className="field">
            <label>Password:</label>
            <input
            type="text"
            name="password"
            value={editedUserData.password}
            onChange={handleInputChange}
            />
        </div>
        <div className="field">
            <label>Password Confirmation:</label>
            <input
            type="text"
            name="password_confirmation"
            value={editedUserData.password}
            onChange={handleInputChange}
            />
        </div>
      </div>
      <button className=" px-4 py-2 bg-orange-500 text-white rounded hover:bg-lime-600" onClick={handleUpdateProfile} disabled={isLoading}>
        {isLoading ? 'Updating...' : 'Save Changes'}
      </button>
    </div>
  );
};

export default EditUserProfile;
