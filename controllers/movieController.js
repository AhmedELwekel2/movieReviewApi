const Movie=require('../models/Movie')


const factory=require('./handlerFactory')





 exports.createMovie=factory.createOne(Movie)

 exports.getAllMovies=async (req, res, next) => {
    const doc = await Movie.find().populate('reviews').populate('actors').populate('directors');
    console.log(doc)
  
    res.status(201).json({
      status: 'success',
      data: {
        data: doc
      }
    });
}

 exports.updateMovie=factory.updateOne(Movie)

 exports.deleteMovie=factory.deleteOne(Movie)







