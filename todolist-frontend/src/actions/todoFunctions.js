import axios from "axios";

export const createTodo = (todo) => {
    return axios
      .post("http://localhost:5000/api/todos/add",  todo,
      {
        headers: { "Content-Type": "application/json" }
      })

  };



  export const listTodo = (username) => {
    return axios.get('http://localhost:5000/api/todos/'+ username)
    
  };

  export const singleTodo = (todoId) => {
    return axios.get('http://localhost:5000/api/todos/todo/'+ todoId,
    )
    
  };

  export const modifyTodo = (todoId, todo) => {
    return axios.put('http://localhost:5000/api/todos/'+ todoId, todo,
    {
      headers: { "Content-Type": "application/json" }
    })
    
  };

