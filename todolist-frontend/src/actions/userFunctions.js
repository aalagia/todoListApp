import axios from "axios";

// Register User
export const registerUser = (username) => {
    return axios
      .post("http://localhost:5000/api/users/register",       {
        username: username
        
      },
      {
        headers: { "Content-Type": "application/json" }
      })

  };