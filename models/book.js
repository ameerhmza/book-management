import mongoose, { Schema } from "mongoose";

const bookSchema=new mongoose.Schema({
    title:{type:String ,required:true},
    isPublished:Boolean,
    author:{type:Schema.Types.ObjectId,ref:'author'},
    genre:{type:Schema.Types.ObjectId, ref:'genre'}
});

const Book=mongoose.model('book',bookSchema);

export default Book;