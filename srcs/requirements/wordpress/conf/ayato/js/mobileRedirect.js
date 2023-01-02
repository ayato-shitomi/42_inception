function isSmartPhone(){
	if (navigator.userAgent.match(/iPhone|Android.+Mobile/)){
		document.location = "./mobile.html";
		return 0;
	}
	return 0;
}
isSmartPhone();