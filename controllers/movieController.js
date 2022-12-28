const Movie=require('../models/Movie')


const factory=require('./handlerFactory')





 exports.createMovie=factory.createOne(Movie)

 exports.getAllMovies=factory.getAll(Movie)

 exports.updateMovie=factory.updateOne(Movie)

 exports.deleteMovie=factory.deleteOne(Movie)







