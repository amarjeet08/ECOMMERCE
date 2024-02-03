import React from 'react';
import axios from 'axios';

const Logout = () => {
  const handleClick = async (e) => {
    const response = await axios.post('http://localhost:3001/api/user/logout');
    localStorage.removeItem('jwtEcom');
    console.log(response.data);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        type="button"
        className="btn btn-success"
      >
        Log Out
      </button>
    </div>
  );
};

export default Logout;
