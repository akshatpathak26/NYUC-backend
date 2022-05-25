const Event = require('../models/Event')
const { StatusCodes } = require('http-status-codes')


const getAllEvents = async (req, res) => {
  const events = await Event.find({ createdBy: req.body.id })
  res.status(StatusCodes.OK).json({ events})
}
const getEvent = async (req, res) => {
  const {
    user: { userId },
    params: { id: eventId },
  } = req

  const event = await Event.findOne({
    _id: eventId,
    createdBy: userId,
  })
  if (!event) {
    res.send(`No job with id ${eventId}`)
  }
  res.status(StatusCodes.OK).json({ event })
}

const createEvent = async (req, res) => {
  req.body.createdBy = req.body.id
  const event = await Event.create(req.body)

   res.json({ event })
}


const deleteEvent = async (req, res) => {
const eventKiId = req.params.id
const userKiId = req.body.id

  const event = await Event.findByIdAndRemove({
    _id: eventKiId,
    createdBy: userKiId,
  })
  if (!event) {
   res.send(`No event with id ${eventKiId}`)
  }
  res.send()
}

module.exports = {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
}
