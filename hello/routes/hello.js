
/*
 * GET home page.
 */

exports.view = function(req, res){
  // Query request parameters
  var nameToShow = req.params.userName;
  // if no name specified, set default: World
  if (nameToShow == undefined) {
    nameToShow = 'World';
  }

  console.log("name is " + nameToShow);
    
  res.render('index', {
  	'name': nameToShow,
  });
};
