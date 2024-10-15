import { Router } from "express";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todo.js";
import { todoIconUpload, userAvatarUpload } from "../middlewares/upload.js";

// create a router 
const todoRouter = Router();


//define routes
todoRouter.post('/todos', todoIconUpload.single('icon'), addTodo);

todoRouter.get('/todos', getTodos);

todoRouter.patch('/todos/:id', updateTodo);

todoRouter.delete('/id', deleteTodo);

// export router
export default todoRouter;