const mongoose=require('mongoose')


const movieListSchema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,'please enter the name of the list ']
    },
    description:{
        type:String,
        required:[true,'please describe your list']
    },
    movies:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Movie'

        }
    ],

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

const MovieList=mongoose.model('MovieList',movieListSchema)

module.exports=MovieList;