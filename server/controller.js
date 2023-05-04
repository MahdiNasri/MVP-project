const Event = require('./database/model.js')
const selectAllEvent = async function(req,res){
    try{
        const events = await Event.find({})
        res.json(events)
    }catch(err){
        res.json(err)
    }
}
const createEvent = async function(req,res){
    try{
        const event = await Event.create(req.body)
        res.json(event)
    }catch(err){
        res.json(err)
    }
}
const deleteEvent = async function(req,res){
    try{
        const deleteEvent = await Event.deleteOne({_id:req.params.id})
        res.json(deleteEvent)
    }catch(err){
        res.json(err)
}
}
const updateEvent = async function(req,res){
    try{
        const updateEvent = await Event.updateOne({_id:req.params.id},req.body)
        res.json(updateEvent)
    }catch(err){
        res.json(err)
    }
}

module.exports = {
    selectAllEvent,
    createEvent,
    deleteEvent,
    updateEvent,

}