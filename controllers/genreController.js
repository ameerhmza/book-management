import express from 'express';
const router = express.Router();
import Genre from '../models/genre.js';

// createGenre
router.post('/create', async (req, res) => {
   try{
     let { name } = req.body;
    const genre=new Genre({name});
    const result=await genre.save();
    res.status(201).json(result);
}
catch(error){
    res.status(500).json(error);
}
});

// getAllGenre
router.get('/', async (req, res) => {
    try{
     const genre=await Genre.find();
     if(!genre)
     {
        return res.status(404).json({message:"Nothing Found Add first"})
     }
     res.status(200).json(genre);
 }
 catch(error){
     res.status(500).json(error);
 }
 });

 // getSpecificGenre
router.get('/:id', async (req, res) => {
    try{
    
     const genre=await Genre.findById(req.params.id);
     if(!genre)
     {
        return res.status(404).json({message:"Not Found"})
     }
     res.status(200).json(genre);
 }
 catch(error){
     res.status(500).json(error);
 }
 });

  // updateSpecificGenre
router.put('/:id', async (req, res) => {
    try{
    
     const genre=await Genre.findByIdAndUpdate(req.params.id,{name:req.body.name});
     if(!genre)
     {
        return res.status(404).json({message:"No Genre with this id"})
     }
     res.status(200).json(genre);
 }
 catch(error){
     res.status(500).json(error);
 }
 });

   // DeleteSpecificGenre
router.delete('/:id', async (req, res) => {
    try{
    
     const genre=await Genre.findByIdAndDelete(req.params.id);
     if(!genre)
     {
        return res.status(404).json({message:"No Genre with this id"})
     }
     res.status(204).json(genre);
 }
 catch(error){
     res.status(500).json(error);
 }
 });
 
export default router;