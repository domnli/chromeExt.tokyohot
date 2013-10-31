$('a').mousemove(function(){
	chrome.extension.sendRequest({eventName: 'event', eventValue: 'value'});
})