var proxyAvailable = /(Android|iPhone|Phone|iPad)/gi;
var matchPhone = ()=>{
	if(navigator.userAgent.match(proxyAvailable)){
		return true;
	}
	else{
		return false;
	}
};

module.exports = {
	matchPhone
};