const router = require('express').Router()
const appointmentController = require('../controllers/appointment.controller')
const { auth } = require('../utils/auth')

router.route('/:artistId').post(auth, appointmentController.create)

module.exports = router