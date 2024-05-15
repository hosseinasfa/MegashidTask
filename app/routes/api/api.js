const express = require('express');
const router = express.Router();

//Controllers
const connectionController = require('app/http/controllers/connectionController');

// Validators
const connectionValidator = require('app/http/validators/connectionValidator');

router.get('/' , connectionController.index);

//Connection Routes
router.get('/connections' , connectionController.showConnections);
router.post('/connections/create' , connectionValidator.handle() ,connectionController.store);
router.put('/connections/:id' ,connectionValidator.handle() ,connectionController.update);
router.delete('/connections/:id' , connectionController.destroy);


module.exports = router;