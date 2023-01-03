const mongoose=require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const Actor=require('./Actor')
const movieSchema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,'please enter the movie name ']
    },
    genre:{
        type:String,
        required:[true,'please enter the genre of the movie']
    },
    avgRating:{
        type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0']
        
    },
    plot:{
        type:String,
        required:[true,'please enter the plot of the movie']
    },
    releaseDate:{
        type:Date
    },
   

 images:{
    type:[String]
    
 },
 ratingsQuantity: {
    type: Number,
    default: 0
  }


        
    




},{
  

  toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

movieSchema.set('toObject',{virtuals:true})
movieSchema.set('toJSON',{virtuals:true})


movieSchema.virtual('reviews', {
    ref: 'Review',
    foreignField: 'movie',
    localField: '_id',
  });

  movieSchema.virtual('actors', {
    ref: 'Actor',
    foreignField: 'movies',
    localField: '_id'
  });

  movieSchema.virtual('directors', {
    ref: 'Director',
    foreignField: 'movies',
    localField: '_id'
  });






const Movie=mongoose.model('Movie',movieSchema)

module.exports=Movie;