
module.exports.home = function(req,res){

    return res.render('home',{
        title:'Home'
    })

}

module.exports.think = function(req,res){

    return res.send('<h1>What are you doing these days</h1>');

}
module.exports.user = function(req,res){

    return res.send('<h1>Hello Dear User </h1>');

}
module.exports.student = function(req,res){

    return res.send('<h1>Hello Dear Student </h1>');

}
module.exports.emp = function(req,res){

    return res.send('<h1>Hello Dear Employee </h1>');

}

