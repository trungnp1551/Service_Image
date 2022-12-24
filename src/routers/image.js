const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload');

const imageController = require('../controllers/image')

router
    .route('/:imageId')
    .get(imageController.getUrl)

router
    .route('/:userId')
    .get(imageController.getListImage)
    .post(upload.single("image"), imageController.createImage)

module.exports = router