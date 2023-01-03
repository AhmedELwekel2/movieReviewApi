const mongoose=require('mongoose')
const Movie=require('./Movie')

const actorSchema=new mongoose.Schema({
  
    name :{
        type:String,
        required:[true,'please enter the name of the actor'],
        unique:true
    },
    movies:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'Movie'

        }
    ],
    Bio:{
        type:String
    },
    images:{
        type:[String]
    }


    
    


})

actorSchema.pre(/^find/, function(next) {
    this.populate({
      path: 'movies',
      select: 'name'
    });
  
    next();
  });



const Actor=mongoose.model('Actor',actorSchema)

module.exports=Actor