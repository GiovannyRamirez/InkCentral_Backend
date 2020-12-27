const router = require('express').Router();
const paymentController = require('../controllers/payment.controller')
const  { auth } = require('../utils/auth')

router.route('/:artistId').post(auth, paymentController.create);
// router.route('/:paymentId').get(paymentController.show)

module.exports = router;