const mongoose=require('mongoose')
const Movie=require('./Movie')
const directorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter the name of the director'],
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


directorSchema.pre(/^find/, function(next) {
    this.populate({
      path: 'movies',
      select: 'name'
    });
  
    next();
  });

  directorSchema.post('save',async function(){

    const movies=this.movies;
    
    for (let i=0 ; i<movies.length ; i ++){
      await Movie.findByIdAndUpdate(movies[i],{
         actors:this._id
      })
 
    }
 
 
 })
 
  

const Director=mongoose.model('Director',directorSchema)

module.exports=Director