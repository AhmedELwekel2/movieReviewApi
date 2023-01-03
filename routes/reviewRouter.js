const express = require('express');
const reviewController = require('./../controllers/reviewController');
const authController = require('./../controllers/authController');
const { addSyntheticLeadingComment } = require('typescript');


const reviewRouter = express.Router();

reviewRouter.use(authController.protect)

reviewRouter.post('/',authController.restrictTo('user','admin'),reviewController.setTourUserIds,reviewController.createReview)

reviewRouter.post('/:id',authController.restrictTo('user','admin'),reviewController.setTourUserIds,reviewController.updateReview)

reviewRouter.delete('/:id',authController.restrictTo('user','admin'),reviewController.setTourUserIds,reviewController.deleteReview)

reviewRouter.get('/',authController.restrictTo('user','admin'),reviewController.setTourUserIds,reviewController.getAllReviews)




module.exports=reviewRouter