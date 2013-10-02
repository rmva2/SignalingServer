
/*
 * GET home page.
 */
//GET /
exports.index = function(req, res){
  res.render('dialer', { title: 'Sign in' });
};
//GET /signin
exports.signin = function(req, res){
  res.render('signIn', { title: 'Sign in' });
};
//GET /createAccount
exports.createAccount = function(req, res){
  res.render('createAccount', { title: 'Create account' });
};
//GET /dialer
exports.dialer = function(req, res){
  res.render('dialer', { title: 'Dialer' });
};