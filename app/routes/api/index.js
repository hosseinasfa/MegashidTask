const express = require('express');
const router = express.Router();

//Controllers
const connectionController = require('app/http/controllers/connectionController');

router.get('/' , connectionController.index);


module.exports = router;