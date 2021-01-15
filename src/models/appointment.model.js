const { model, Schema } = require('mongoose')

const appointmentSchema = new Schema ({
  startDate: {
    type: Date,
    required: true
  },
  endDate: Date,
  provider: {
    type: Schema.Types.ObjectId,
    ref: 'Artist',
    required: true
  },
  consumer: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
    required: true
  }
})

const Appointment = model('Appointment', appointmentSchema)

module.exports = Appointment