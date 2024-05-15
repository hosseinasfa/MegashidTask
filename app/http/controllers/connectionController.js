const controller = require('app/http/controllers/controller');
const Connection = require('app/models/connection');


class connectionController extends controller {
    async index(req , res) {
        res.json('Megashid Task')
    }

    async store(req , res , next) {
        try {
    
            let { name , value } = req.body;
            
            //create connection
            let newConnection = new Connection ({ 
                name,
                value,
                slug : this.slug(name),
            });

            await newConnection.save();

    
            return res.json('connection saved successfully!');
        } catch(err) {
            next(err);
        }
    }

    async showConnections(req , res , next) {
        let connections = await Connection.find();
        res.json(connections)
    }

    async update(req , res , next) {

            let { name , value } = req.body;

            //update connection
            await Connection.findByIdAndUpdate(req.params.id , { $set : { 
                name,
                value,
                slug : this.slug(name),
             }})


            
            return res.json('connection updated successfully!');

    }


    async destroy(req , res , next) {

        const deletedConnection = await Connection.findByIdAndDelete(req.params.id);
        if (!deletedConnection) {
          return res.status(404).json({ error: 'Connection not found' });
        }
        res.status(200).json({ message: 'Connection deleted successfully' });

    
            

    }

}

module.exports = new connectionController();