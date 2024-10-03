import { Schema,model } from "mongoose";

//  how  will my coluns look like

const todoSchema = new Schema({
title: {type: String, required: true},
completed: {type: Boolean, default: false}
});

// how do we export it out 

export const TodoModel = model('Todo', todoSchema);