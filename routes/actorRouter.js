const express=require('express')

const actorController=require('../controllers/actorController')


const actorRouter=express.Router()


actorRouter.get('/',actorController.getAllActors)

actorRouter.post('/',actorController.createActor)

actorRouter.post('/:id',actorController.updateActor)

actorRouter.delete('/:id',actorController.delete)


module.exports=actorRouter