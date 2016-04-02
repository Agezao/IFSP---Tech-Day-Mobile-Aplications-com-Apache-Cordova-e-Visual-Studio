var Visitor   = require('../entities/visitor');

module.exports = function(app, router){
    //
    //To add a visitor
    router.route('/visitor')
        .post(function(req, res){
            var visitor = new Visitor();
        
            visitor._id = app.newGuid();
            visitor.name = req.body.name;
            visitor.create = new Date().getTime();

        
            visitor.save(function(err){
                if(err)
                    res.send(err);
                
                res.json(visitor);
            });
        })
        .get(function(req, res){
            Visitor.find().exec(function(err, visitors){
                if(err)
                    res.send(err);
                
                res.json(visitors);
            });
        });
};