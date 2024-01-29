import express from 'express';
const router = express.Router();

import Author from '../models/author.js';

// createAuthor
router.post('/create', async (req, res) => {
   try{
     let { name,bio } = req.body;
    const author=new Author({name,bio});
    const result=await author.save();
    res.status(201).json(result);
}
catch(error){
    res.status(500).json(error);
}
});

// getAllAuthor
router.get('/', async (req, res) => {
    try{
     const author=await Author.find();
     if(!author)
     {
        return res.status(404).json({message:"Nothing Found Add first"})
     }
     res.status(200).json(author);
 }
 catch(error){
     res.status(500).json(error);
 }
 });

 // getSpecificAuthor
router.get('/:id', async (req, res) => {
    try{
    
     const author=await Author.findById(req.params.id);
     if(!author)
     {
        return res.status(404).json({message:"Not Found"})
     }
     res.status(200).json(author);
 }
 catch(error){
     res.status(500).json(error);
 }
 });

  // updateSpecificAuthor
router.put('/:id', async (req, res) => {
    try{
    
     const author=await Author.findByIdAndUpdate(req.params.id,{name:req.body.name,bio:req.body.bio});
     if(!author)
     {
        return res.status(404).json({message:"No Author with this id"})
     }
     res.status(200).json(author);
 }
 catch(error){
     res.status(500).json(error);
 }
 });

   // DeleteSpecificAuthor
router.delete('/:id', async (req, res) => {
    try{
    
     const author=await Author.findByIdAndDelete(req.params.id);
     if(!author)
     {
        return res.status(404).json({message:"No Author with this id"})
     }
     res.status(204).json(author);
 }
 catch(error){
     res.status(500).json(error);
 }
 });
 
export default router;