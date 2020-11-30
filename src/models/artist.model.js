const { model, Schema, models } = require('mongoose')

const emailRegexp  = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;


const artistSchema = new Schema({
  image: String,
  name: String,
  nickname: String,
  email: {
    type: String,
    required: true,
    match: [emailRegexp, 'Invalid Email'],
    validate: [
      {
        validator(value){
          return models.Artist.findOne( { email: value })
            .then(artist => !artist)
            .catch(()=> false )
        },
        message: "Email already exists"
      }
    ]
  },
  password: {
    type: String,
    required: true,
  },
  location: String,
  phone: String,
}, {
  timestamps: true
})

const Artist = model('Artist', artistSchema)

module.exports = Artist