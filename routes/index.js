
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { pageTitle: 'Home/Index' });
};

exports.add = function(req, res){
    var value = parseInt(req.params.number1) + parseInt(req.params.number2)
    res.render('add', {pageTitle: 'Adding', result: value});
};