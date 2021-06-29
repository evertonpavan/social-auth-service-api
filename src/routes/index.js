const express = require('express')
const router = express.Router()

const authenticateRoutes = require('./authenticate.routes')

router.use('/auth', authenticateRoutes)


module.exports = router