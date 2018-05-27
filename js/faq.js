// Adds handlers for clicks on FAQ accordions

(function () {
    var faq = document.getElementById("faq");
    var buttons = faq.getElementsByClassName('accordion');
    var panels = faq.getElementsByClassName('panel');

    // Handles click events on drop-down accordions
    function addAccordion(button, panel) {
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
}());
