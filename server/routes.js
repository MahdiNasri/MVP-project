const router = require('express').Router()
const {
    selectAllEvent, createEvent, deleteEvent, updateEvent, selectAllEventByCategory, selectOneEvent,
 } = require('./controller.js')
 
router.get('/', selectAllEvent)
router.get('/category', selectAllEventByCategory)
router.get('/:id', selectOneEvent)
router.post('/', createEvent)     
router.delete('/:id', deleteEvent)
router.put('/:id', updateEvent)
module.exports = router