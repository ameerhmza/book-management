import  express from "express";
import connectDB from "./config/connectDB.js";
import dotenv from "dotenv";

// controllers
import genreController from './controllers/genreController.js';
import authorController from './controllers/authorController.js';
import bookController from './controllers/bookController.js';

import booksOfAuthor from './controllers/allBooksAuthor.js';
import booksOfSpecificGenre from './controllers/allBooksGenre.js'
const app=express();

// env set
dotenv.config();

// database connection
connectDB();

// middlewares
app.use(express.json());

// endpoints
app.use('/genre',genreController);
app.use('/author',authorController);
app.use('/book',bookController);

// additional apis
app.use('/book/author',booksOfAuthor);
app.use('/book/genre',booksOfSpecificGenre);
// server
const PORT=process.env.PORT;
app.listen(PORT,()=>{console.log(`Listening on port ${PORT} ....`)});