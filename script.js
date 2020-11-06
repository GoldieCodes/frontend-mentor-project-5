const menu_icon = document.querySelector('.menu');
const nav = document.querySelector('.navbar');

menu_icon.addEventListener('click', e => {
	showNavBar();
})

	function showNavBar (argument) {
	//this function shows the rest of the nav when the menu_icon is clicked
		
		menu_icon.classList.toggle('close-menu');
		nav.classList.toggle('showNav-links');
	}
