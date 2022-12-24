const mongoose = require('mongoose')

const imageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: String,
    type: {
        type: String,
        enum:['CCCD','BHYT','BLX'],
    },
    imageId: String,
    imageUrl: String,
}, {
    versionKey: false
})

module.exports = mongoose.model('Image', imageSchema)