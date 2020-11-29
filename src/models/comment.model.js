const { model, Schema, models } = require('mongoose')

const commentSchema = new Schema ({
  mensaje: String,
  artistid: String,
  clientid: String,
  new: Boolean,
  published: Date,
}, {
  timestamps: true
})

const Comment = model('Comment', commentSchema)

module.exports = Comment