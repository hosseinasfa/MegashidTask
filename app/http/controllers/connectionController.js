const controller = require('app/http/controllers/controller')

class connectionController extends controller {
    index(req , res) {
        res.json('Megashid Task')
    }
}

module.exports = new connectionController();