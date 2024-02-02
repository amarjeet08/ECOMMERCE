import React from 'react'
import axios from 'axios'

const Logout = () => {
  const handleClick = async (e) => {
    const response = await axios.post('http://localhost:3001/api/user/logout')
    localStorage.removeItem('jwtEcom');
    console.log(response.data)
  }
  return (
    <div>
      <button onClick={handleClick} type="button" class="btn btn-dark">LogOut</button>
    </div>
  )
}

export default Logout;