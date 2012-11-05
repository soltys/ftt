
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { pageTitle: 'Home/Index' });
};

