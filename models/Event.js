const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema(
  {
    event: {
        type:String,
        required:[true,'Please provide event name'],
        minlength:3,
        maxlength:50,
    },
    location: {
        type:String,
        required:[true,'Please provide Location'],
        minlength:3,
        maxlength:50,
    },
    status: {
        type:String,
        // enum: ['online', 'offline','pending'],
        default:'pending'

    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
    
  })

module.exports = mongoose.model('Event', EventSchema)
