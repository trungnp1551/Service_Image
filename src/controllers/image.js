const imageService = require('../services/image');

exports.getUrl = async (req, res) => {
    const id = req.params.imageId
    try {
        const imageUrl = await imageService.getUrl(id)
        if (imageUrl) {
            return res.status(200).json({
                success: true,
                message: 'get image url by id',
                imageUrl
            })
        }
        return res.status(201).json({
            success: false,
            message: 'get image url by id',
        })
    } catch (error) {
        console.log('err get image url by id')
    }
}

exports.getListImage = async (req, res) => {
    const id = req.userId
    console.log(id)
    try {
        const listImage = await imageService.getListImageByUserId(id)
        if (listImage) {
            return res.status(200).json({
                success: true,
                message: 'get list image by userId',
                listImage
            })
        }
        return res.status(201).json({
            success: false,
            message: 'get list image by userId',
        })
    } catch (error) {
        console.log('err get list image by userId')
    }
}

exports.createImage = async (req, res) => {
    const id = req.userId
    const { type } = req.body
    try {
        if (req.file != undefined) {
            const image = await imageService.upload(req.file.path, id, type)
            return res.status(200).json({
                success: true,
                message: 'create image',
                image
            })
        }
        return res.status(201).json({
            success: false,
            message: 'create image',
        })
    } catch (error) {
        console.log(error)
    }
}