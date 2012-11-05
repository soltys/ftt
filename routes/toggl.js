
/*
 * GET users listing.
 */

exports.index = function(req, res){
    res.render('toggl', {pageTitle: 'Toggl/Index'});
};