const Appointment = require('../models/appointment.model')
const Artist = require('../models/artist.model')
const Client = require('../models/client.model')

module.exports = {
  async create(req, res) {
    try {
      const clientId = req.userId
      const { artistId } = req.params
  
      const client = await Client.findById( clientId )
      const artist = await Artist.findById( artistId )
      const appointment = await Appointment
                                  .create({
                                    ...req.body,
                                    provider: artist,
                                    consumer: client
                                  })
      client.appointments.push( appointment )
      artist.appointments.push( appointment )
  
      await client.save({ validateBeforeSave: false })
      await artist.save({ validateBeforeSave: false })
  
      res.status(201).json({ message: 'Appointment Created', data: appointment })
    }
    catch (err) {
      res.status(400).json({ message: err.message })
    }
  }
}