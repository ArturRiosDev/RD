var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.xml');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		console.log(request.responseXML.getElementsByTagName('name')[0].firstChild.nodeValue)	
		let items = request.responseXML.getElementsByTagName('name')
		let output = ''
			for (let i = 0; i < items.length; i++) {
				output += `<li>${items[i].firstChild.nodeValue} </li>`
			}
			document.querySelector('#update').innerHTML = output
		}
	}

request.send()
