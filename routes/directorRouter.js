const express=require('express')
const directorController=require('../controllers/directorController')


const directorRouter=express.Router()

directorRouter.post('/',directorController.createDirector)

directorRouter.post('/:id',directorController.updateDirector)

directorRouter.delete('/:id',directorController.deleteDirector)

directorRouter.get('/',directorController.getAllDirectors)


module.exports=directorRouter