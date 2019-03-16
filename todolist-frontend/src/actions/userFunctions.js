import axios from "axios";
//dispatch => 
// Register User
export const registerUser = (username) => {
    return axios
      .post("/api/users/register",       {
        username: username
        
      },
      {
        headers: { "Content-Type": "application/json" }
      })
      .then(res => {
          //history.push("/home")// re-direct to home on successful
          // Set current user
         // dispatch(res.data);  
        }) 
      //.catch(err =>
        /*dispatch({
          type: "GET_ERRORS",
          payload: err.response.data
        })*/
     // );
  };