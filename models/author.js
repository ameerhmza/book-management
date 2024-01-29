import mongoose, { Schema } from "mongoose";

const authorSchema=new mongoose.Schema({
    name:{type:String ,required:true},
    bio:String,
    // books:[{type:Schema.Types.ObjectId, ref: 'book'}]
});

const Author=mongoose.model('author',authorSchema);

export default Author;