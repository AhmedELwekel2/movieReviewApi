
const mongoose=require('mongoose')

const reviewSchema=new mongoose.Schema({
    review:{
        type:String,
        required:[true,'please write your review ']
    }
    ,
    movie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Movie',
        required:[true,'please type the name of the movie']
    },
    rating:{
        type:Number,
        
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,'review must belong to some user ']

    }




})

const Review=mongoose.model('Review',reviewSchema)

module.exports=Review;
