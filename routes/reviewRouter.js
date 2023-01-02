const express = require('express');
const reviewController = require('./../controllers/reviewController');
const authController = require('./../controllers/authController');
const { addSyntheticLeadingComment } = require('typescript');


const reviewRouter = express.Router({ mergeParams: true });

reviewRouter.use(authController.protect)

reviewRouter.post('/',authController.restrictTo('user','admin'),reviewController.createReview)

reviewRouter.post('/:id',authController.restrictTo('user','admin'),reviewController.updateReview)

reviewRouter.delete('/:id',authController.restrictTo('user','admin'),reviewController.deleteReview)

reviewRouter.get('/',authController.restrictTo('user','admin'),reviewController.getAllReviews)




module.exports=reviewRouter