let proxyAvailable = /(Android|iPhone|Phone|iPad)/gi;
let matchPhone = ()=>{
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