
const mongoose=require('mongoose')
const Movie=require('../models/Movie')
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
     
    




  },{
    
  toJSON:{ virtuals: true },
  toObject:{ virtuals: true }
}
)

reviewSchema.pre(/^find/, function(next) {

    this.populate({
      path: 'user',
      select: 'name '
    }).populate({
        path:'movie',
        select:'name'
    });
    next();
  });
  
  reviewSchema.statics.calcAverageRatings = async function(movieId) {
    const stats = await this.aggregate([
      {
        $match: { movie:movieId }
      },
      {
        $group: {
          _id: '$tour',
          nRating: { $sum: 1 },
          avgRating: { $avg: '$rating' }
        }
      }
    ]);
    // console.log(stats);
  
    if (stats.length > 0) {
      await Movie.findByIdAndUpdate(tourId, {
        ratingsQuantity: stats[0].nRating,
        avgRating: stats[0].avgRating
      });
    } else {
      await Movie.findByIdAndUpdate(tourId, {
        ratingsQuantity: 0,
        avgRating: 4.5
      });
    }
  };
  
  reviewSchema.post('save', function() {
    // this points to current review
    this.constructor.calcAverageRatings(this.movie);
  });
  
  // findByIdAndUpdate
  // findByIdAndDelete
  reviewSchema.pre(/^findOneAnd/, async function(next) {
    this.r = await this.findOne();
    // console.log(this.r);
    next();
  });
  
  reviewSchema.post(/^findOneAnd/, async function() {
    // await this.findOne(); does NOT work here, query has already executed
    await this.r.constructor.calcAverageRatings(this.r.movie);
  });
  

const Review=mongoose.model('Review',reviewSchema)

module.exports=Review;
