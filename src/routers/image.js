const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload');
const auth = require('../middleware/auth')
const imageController = require('../controllers/image')

router
    .route('/:imageId')
    .get(auth, imageController.getUrl)

router
    .route('/')
    .get(auth, imageController.getListImage)
    .post(auth, upload.single("image"), imageController.createImage)

module.exports = router