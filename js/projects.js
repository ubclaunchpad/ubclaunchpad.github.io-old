// Handles rendering project image carousels

(function() {
    var IMG_URL_ROOT = '/img/projects';
    // Defines the data associated with each project. When adding a new project,
    // add it here in addition to in projects.html.
    var projects = [{
        id: 'eat',
        images: ['eat.jpg']
    }, {
        id: 'etch',
        images: ['etch.png']
    }, {
        id: 'cumulus',
        images: ['cumulus.png']
    }, {
        id: 'driver',
        images: ['driver.png']
    }, {
        id: 'cashout',
        images: ['cashout.png']
    }, {
        id: 'rocketcast',
        images: ['rocketcast.jpg']
    }, {
        id: 'rocketpoll',
        images: ['rocketpoll.jpg']
    }];

    function imageUrl(project, i) {
        return IMG_URL_ROOT + '/' + project.id + '/' + project.images[i];
    }

    // Given a project of the above form, renders an image carousel.
    function renderCarousel(project) {
        var id = project.id;
        var images = project.images;
        var selectors = [];

        var root = document.getElementById(id);
        if (!root) {
            console.error('Failed to get root node for id ', id);
            return;
        }

        var image = document.createElement('img');

        var selectorContainer = document.createElement('div');
        selectorContainer.className = 'project-image-selector-container';

        var onClickSelector = function(selectorIndex) {
            selectors.forEach(function(selector) {
                selector.classList.remove('selected');
            });
            selectors[selectorIndex].classList.add('selected');
            image.src = imageUrl(project, selectorIndex);
        }

        for (var i = 0; i < images.length; i++) {
            selectors[i] = document.createElement('div');
            selectors[i].className = 'project-image-selector';
            selectors[i].onclick = onClickSelector.bind(this, i);
            selectorContainer.appendChild(selectors[i]);
        }

        root.appendChild(image);
        root.appendChild(selectorContainer);

        // Set first image
        image.src = imageUrl(project, 0);
        selectors[0].classList.add('selected');
    }

    projects.forEach(renderCarousel);
}())