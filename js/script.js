onload = start;

var popup = document.getElementsByClassName('popup');

function closePopup(e) {
  if (e.target.className === 'popup') {
    window.location.hash = '';
  }
}

for (var j=0; j < popup.length; j++) {
	popup[j].addEventListener('click', closePopup);
}






























