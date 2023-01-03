const express=require('express')
const movieController=require('../controllers/movieController')
const movieRouter=express.Router()
const authController = require('./../controllers/authController');


movieRouter.use(authController.protect)

movieRouter.post('/',movieController.createMovie)

movieRouter.post('/:id',movieController.updateMovie)

movieRouter.delete('/:id',movieController.deleteMovie)

movieRouter.get('/',movieController.getAllMovies)


module.exports=movieRouter