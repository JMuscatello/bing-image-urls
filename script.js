urls = Array.from(document.querySelectorAll('.iusc'));
var arr = [];
for (var i = 0 in urls) {
	arr.push(JSON.parse(urls[i].getAttribute('m'))['murl']);
}
var myWindow = window.open("", "newWindow", "width=500,height=700");
myWindow.document.body.innerHTML = arr.join('<br>');
