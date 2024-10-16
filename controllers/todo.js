 import { TodoModel } from "../models/todo.js";
 import { addTodoValidator } from '../validators/todo.js';
 
 
 
 export const addTodo = async(req, res, next) => {
    try {
        // validate user input
        // write todo to database
        const { error, value } = addTodoValidator.validate({
            ...req.body,
            icon: req.file?.filename
        });
        if (error) {
            return res.status(422).json(error);
        }

        await TodoModel.create(value);
        // respond to request
        res.status(201).json('Todo was added!');
    } catch (error) {
       next(error);
    }
}
export const getTodos = async (req, res, next) =>{
    try {
    const{filter = "{}",limit = 10, skip = 0 } =  req.query;
        // fetch todos from datababe
        const todos = await TodoModel
        .find(JSON.parse(filter))
        .limit(limit)
        .skip(skip);
        // return response
        res.status(200).json(todos);
    } catch (error) {
        next(error);
    }
}
export const updateTodo = (req, res, next) => {
    res.json('Todo updated');
}
export const deleteTodo = (req, res, next) => {
    res.json('Todo deleted');
}