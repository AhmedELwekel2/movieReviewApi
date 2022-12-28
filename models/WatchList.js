const mongoose=require('mongoose')

const WatchListSchema=new mongoose.Schema({
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

const WatchList=mongoose.model('WatchList',WatchListSchema)

module.exports=WatchList