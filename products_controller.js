

module.exports = {
    
    createProduct: function(req, res, next){
        const db = req.app.get('db');
        const {name, description, price, image_url} = req.body;
        console.log('db',db)
            
            db.create_product([name, description, price, image_url])
            .then(() => {res.status(200)})
            .catch((err) => {res.status(500).send({errorMessage:'Something went wrong'}) 
            console.log(err)
        })
    },

    updateProduct: function(req, res, next){
        const db = req.app.get('db');
        const {params, query} = req;
        

        db.update_product([params.id, query.desc])
        .then(() => res.status(200).send())
        .catch((err) => res.status(500).send(err) )
    },

    deleteProduct: function(req, res, next){
        const db = req.app.get('db');
        const {id} = req.params

        db.delete_product(id)
        .then(() => res.status(200).send())
        .catch((err) => res.status(500).send(err) )

    },

    getOne: function(req, res, next){
        const db = req.app.get('db')
        const {id} = req.params

        db.read_product(id)
        .then((product) => res.status(200).send(product))
        .catch((err) => res.status(500).send(err) )
    },

    getAll: function(req, res, next){
        const db = req.app.get('db')

        db.read_products()
            .then((products) => res.status(200).send(products))
            .catch((err) => res.status(500).send(err))
    }


}