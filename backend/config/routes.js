const express = require('express')

module.exports = function(server) {

    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //rotas da Api
    const billingCycleService = require('../app/billingCycle/billiCycleService')
    billingCycleService.register(router, '/billingCycles')
}
