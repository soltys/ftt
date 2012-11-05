
/*
 * GET users listing.
 */

exports.index = function(req, res){
    res.render('trello', {pageTitle: 'Trello/Index'});
};