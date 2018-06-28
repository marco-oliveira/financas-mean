module.exports = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS, PATCH')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}