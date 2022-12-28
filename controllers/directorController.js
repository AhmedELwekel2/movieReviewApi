const factory=require('./handlerFactory')

const Director=require('../models/Director')


exports.createDirector=factory.createOne(Director)

exports.getAllDirectors=factory.getAll(Director)

exports.updateDirector=factory.updateOne(Director)

exports.deleteDirector=factory.deleteOne(Director)