const express=require('express')

const actorController=require('../controllers/actorController')

const authController = require('./../controllers/authController');

const actorRouter=express.Router()

actorRouter.use(authController.protect)

actorRouter.get('/',actorController.getAllActors)

// actorRouter.get('/:id',actorController.getOne)
actorRouter.post('/',actorController.createActor)

actorRouter.post('/:id',actorController.updateActor)

actorRouter.delete('/:id',actorController.delete)


module.exports=actorRouter