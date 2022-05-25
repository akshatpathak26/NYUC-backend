const express = require('express')

const router = express.Router()
const {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
} = require('../controllers/event')

router.route('/').post(createEvent).get(getAllEvents)

router.route('/:id').get(getEvent).delete(deleteEvent)

module.exports = router
