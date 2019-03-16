import axios from "axios";

export const createTodo = (todo) => {
    return axios
      .post("/api/todos/add",  todo,
      {
        headers: { "Content-Type": "application/json" }
      })
      .then(res => {
 
        }) 

  };



  export const listTodo = (username) => {
    return axios.get('/api/todos/'+ username)
    
  };

  export const singleTodo = (todoId) => {
    return axios.get('/api/todos/todo/'+ todoId)
    
  };

  export const modifyTodo = (todoId, todo) => {
    return axios.put('/api/todos/'+ todoId, todo)
    
  };

