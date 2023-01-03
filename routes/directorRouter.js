const express=require('express')
const directorController=require('../controllers/directorController')
const authController = require('./../controllers/authController');


const directorRouter=express.Router()

directorRouter.use(authController.protect)

directorRouter.post('/',directorController.createDirector)

directorRouter.post('/:id',directorController.updateDirector)

directorRouter.delete('/:id',directorController.deleteDirector)

directorRouter.get('/',directorController.getAllDirectors)


module.exports=directorRouter