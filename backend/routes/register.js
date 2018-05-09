const path = require('path');

module.exports = (router) =>{
	var register = router;

	register.get('/', (req, res, next)=>{
		next();
    });

	return register;
}