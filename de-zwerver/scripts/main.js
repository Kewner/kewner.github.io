var myImage = document.querySelector('img');

myImage.onclick = function () {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/zwerver.jpg') {
	myImage.setAttribute ('src', 'images/zwervers.jpg');
	} else {
	myImage.setAttribute ('src', 'images/zwerver.jpg');
	}
	
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Vul hier je naam in.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Zwerver 4 Life, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Zwerver 4 Life, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}