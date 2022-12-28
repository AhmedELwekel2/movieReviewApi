const factory=require('./handlerFactory')

const Actor=require('../models/Actor')


exports.createActor=factory.createOne(Actor)

exports.getAllActors=factory.getAll(Actor)

exports.updateActor=factory.updateOne(Actor)

exports.delete=factory.deleteOne(Actor)