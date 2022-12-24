const mongoose = require('mongoose')
const Image = require('../models/image')
const cloudinary = require('../middleware/cloudinary')

exports.upload = async (path, userId, type) => {

    try {
        const result = await cloudinary.uploader.upload(path);
        const image = new Image({
            _id: new mongoose.Types.ObjectId(),
            userId: userId,
            type: type,
            imageId: result.public_id,
            imageUrl: result.secure_url,
        })
        await image.save()
        return image
    } catch (error) {
        console.log(error)
    }
}

exports.destroyImage = async (image) => {
    try {
        await Image.findOne({ _id: image._id }).remove()
        await cloudinary.uploader.destroy(image.imageId)
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

exports.getUrl = async (id) => {
    try {
        const image = await Image.findById(id)
        return image.imageUrl
    } catch (error) {
        console.log(error)
    }
}

exports.getListImageByUserId = async (userId) => {
    try {
        var listImage = await Image.find({userId: userId})
        return listImage
    } catch (error) {
        console.log(error)
    }
}