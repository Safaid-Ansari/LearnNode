
module.exports.home = function(req,res){

    return res.send('<h1>Express is up for Codial</h1>');

}

module.exports.think = function(req,res){

    return res.send('<h1>What are you doing these days</h1>');

}
