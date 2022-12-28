const mongoose=require('mongoose')


const actorSchema=new mongoose.Schema({
  
    name :{
        type:String,
        required:[true,'please enter the name of the actor']
    },
    movies:[
        {
            type:mongoose.Schema.Types.ObjectId,
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



const Actor=mongoose.model('Actor',actorSchema)

module.exports=Actor