
/*
 * GET home page.
 */
//GET /
exports.index = function(req, res){
  res.render('signIn', { title: 'Sign in' });
};
//GET /signin
exports.signin = function(req, res){
  res.render('signIn', { title: 'Sign in' });
};
//GET /createAccount
exports.createAccount = function(req, res){
  res.render('createAccount', { title: 'Create account' });
};