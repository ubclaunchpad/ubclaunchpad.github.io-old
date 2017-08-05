// Pulls the list of current team members from our API and
// renders them in the team section

(function() {
    var URL = 'http://rocket.ubclaunchpad.com/api/teams';

    // Creates a team member DOM node
    function createMember(member) {
        var container = document.createElement('div');
        container.className = 'member';

        var image = document.createElement('img');
        image.className = 'member-photo';
        image.src = member.imageUrl;

        var name = document.createElement('h1');
        name.className = 'member-name';
        name.innerText = member.name;

        var position = document.createElement('h2');
        position.className = 'member-position';
        position.innerText = member.position;

        container.appendChild(image);
        container.appendChild(name);
        container.appendChild(position);

        return container;
    }

    // Creates a team in the DOM and renders it on the node
    function renderTeam(team, node) {
        var button = document.createElement('a');
        button.className = 'button accordion';
        button.innerText = team.name;
        var icon = document.createElement('i');
        icon.className = 'right fa fa-caret-right';
        button.appendChild(icon);

        var panel = document.createElement('div');
        panel.className = 'panel';
        team.members.forEach(function(member) {
            panel.appendChild(createMember(member));
        });

        node.appendChild(button);
        node.appendChild(panel);
    }

    // Handles click events on drop-down accordions
    function handleAccordions() {
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
    }

    // Pull roster data and render it
    fetch(URL).then(function(res) {
        console.log(res);
        res.json().then(function(teams) {
            var container = document.getElementById('team-accordions');
            console.log(teams);
            console.log(container);
            teams.forEach(function(team) {
                console.log(team);
                renderTeam(team, container);
            });
            handleAccordions()
        });
    });
}());