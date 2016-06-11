(function () {
	var buttons = document.getElementsByClassName('accordion');
	var panels = document.getElementsByClassName('panel');

	function addAccordion (button, panel) {
		button.addEventListener('click', function (event) {

			if (button.classList.contains('active')) {
				button.classList.remove('active');
				button.children[0].classList.remove('fa-caret-down');
				button.children[0].classList.add('fa-caret-right');
				panel.classList.remove('active');
			} else {
				button.classList.add('active');
				button.children[0].classList.remove('fa-caret-right');
				button.children[0].classList.add('fa-caret-down');
				panel.classList.add('active');
			}
		});
	}

	for (var i = 0; i < buttons.length; i++) {
		addAccordion(buttons[i], panels[i]);
	}
})();
