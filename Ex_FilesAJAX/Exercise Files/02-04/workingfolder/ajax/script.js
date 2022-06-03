var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.json');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		let items = JSON.parse(request.responseText)
		console.log(items)
		let container = document.querySelector('#update')
		let nuevo = ''	
		items.map(n=>{
			return nuevo += `<li> ${n.name}</li>`
		})
		container.innerHTML = nuevo
	}
}
request.send();
