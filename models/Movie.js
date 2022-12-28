const mongoose=require('mongoose')
const ObjectId = mongoose.Types.ObjectId

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
    actors:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Actor'
            
            
        }
    ],
    director:[
    {
        type:mongoose.Schema.Types.ObjectId,
         ref:'Director'
       
    }]

,
 images:{
    type:[String]
    
 }
        
    




})

const Movie=mongoose.model('Movie',movieSchema)

module.exports=Movie;