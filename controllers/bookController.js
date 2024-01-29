import express from 'express';
const router = express.Router();

import Book from '../models/book.js';

// createAuthor
router.post('/create', async (req, res) => {
   try{
     let { title,isPublished,author,genre } = req.body;
    const book=new Book({title,isPublished,author,genre});
    const result=await book.save();
    res.status(201).json(result);
}
catch(error){
    res.status(500).json(error);
}
});

// getAllBooks
router.get('/', async (req, res) => {
    try{
     const book=await Book.find()
     //.populate('author',('name -_id')).populate('genre','name -_id');
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

 // getSpecificBook
router.get('/:id', async (req, res) => {
    try{
    
     const book=await Book.findById(req.params.id);
     if(!book)
     {
        return res.status(404).json({message:"Not Found"})
     }
     res.status(200).json(book);
 }
 catch(error){
     res.status(500).json(error);
 }
 });

  // updateSpecificBook
router.put('/:id', async (req, res) => {
    try{
        let { title,isPublished,author,genre } = req.body;
     const book=await Book.findByIdAndUpdate(req.params.id,{title,isPublished,author,genre});
     if(!book)
     {
        return res.status(404).json({message:"No Book with this id"})
     }
     res.status(200).json(book);
 }
 catch(error){
     res.status(500).json(error);
 }
 });

   // DeleteSpecificBook
router.delete('/:id', async (req, res) => {
    try{
    
     const book=await Book.findByIdAndDelete(req.params.id);
     if(!book)
     {
        return res.status(404).json({message:"No Book with this id"})
     }
     res.status(204).json(book);
 }
 catch(error){
     res.status(500).json(error);
 }
 });

export default router;