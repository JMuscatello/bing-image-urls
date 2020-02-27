# bing-image-urls
A javascript snippet to retrieve urls from bing image search. Just perform a search on www.bing.com open up a javascript console in your browser using **ctrl+shift+J** and copy and paste the code snippet below. A new window will be opened containing the source urls of all images displayed on the page.
```javascript
urls = Array.from(document.querySelectorAll('.iusc'));
var arr = [];
for (var i = 0 in urls) {
	arr.push(JSON.parse(urls[i].getAttribute('m'))['murl']);
}
var myWindow = window.open("", "newWindow", "width=500,height=700");
myWindow.document.body.innerHTML = arr.join('<br>');
```

