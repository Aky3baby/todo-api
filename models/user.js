import { type } from "express/lib/response";
import { Schema,model} from "mongoose";

const userschema = new Schema({
    name:{type: String, reqired: true}
})