setInterval(function(){
	var hoje=new Date();
	var dia= hoje.getDay();
	var semana=new Array(6);
	semana[6]='1';
	var countNewItem = semana[dia];
	chrome.browserAction.setBadgeText({text:countNewItem})
	chrome.browserAction.setBadgeBackgroundColor({color:"#F00"})
}, 1000);