// Load Todo model
const Todo = require("../../models/Todo");
var express = require("express");
var router = express.Router();

// @route GET api/todos
// @desc Todos
// @access Public
router.get('/:username', (req, res) =>  {
    Todo.find({todo_responsible : req.params.username })
        .then(todos => {
                res.json(todos);
        })
        .catch(err => res.json("Bad request"));
    
});

// @route GET api/single todo
// @desc Todo
// @access Public
router.get('/todo/:id', (req, res) =>  {
    Todo.findById(req.params.id)
        .then(todo => {
                res.json(todo);
        })
        .catch(err => res.json("Bad request"));
    
});

// @route POST api/add
// @desc add Todo
// @access Public
router.post('/add', (req, res) =>  {
    const newTodo = new Todo({
        todo_description : req.body.todo_description,
        todo_responsible : req.body.todo_responsible,
        todo_priority : req.body.todo_priority,
        todo_completed: req.body.todo_completed
    })
    newTodo
        .save()
        .then((todo) => res.json(todo))
        .catch(err => res.status(400).send("Insert failed retry"));
    
    
});

// @route PUT api/modify
// @desc modify Todo
// @access Public
router.put('/:id', (req, res) =>  {
    
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.todo_description = req.body.todo_description;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
    
    
    
});

module.exports = router;