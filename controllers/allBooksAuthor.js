// Provide Api's for retrieving all Books of an Author and their respective Genre.

import express from 'express';
const router = express.Router();

import Book from '../models/book.js';


router.get('/:id', async (req, res) => {
    try{
     const book=await Book.find({author:req.params.id})
     .populate('author',('name -_id')).populate('genre','name -_id')
     .select('-_id -isPublished -__v');

     if(!book)
     {
        return res.status(404).json({message:"Nothing Found Add first"})
     }
     res.status(200).json(book);
 }
 catch(error){
     res.status(500).json(error);
 }
 });
 
export default router;