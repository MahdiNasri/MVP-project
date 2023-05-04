const router = require('express').Router()
const {
    selectAllEvent, createEvent, deleteEvent, updateEvent,
 } = require('./controller.js')
 
router.get('/', selectAllEvent)
router.post('/', createEvent)     
router.delete('/:id', deleteEvent)
router.put('/:id', updateEvent)
module.exports = router