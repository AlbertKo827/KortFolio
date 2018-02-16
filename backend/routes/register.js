module.exports = (router) =>{
	var register = router;

	register.get('/', (req, res)=>{
		console.log('register');
	});

	return register;
}