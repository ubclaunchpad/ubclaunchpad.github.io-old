// Pulls the list of current team members from our API and
// renders them in the team section

(function () {
    var URL = 'https://rocket.ubclaunchpad.com/api/teams';
    var DEFAULT_IMAGE = '/img/silhouette.jpg';

    // Emoji converter
    var emoji = new EmojiConvertor();
    emoji.init_env();
    emoji.replace_mode = 'unified';
    emoji.allow_native = true;

    // Creates a team member DOM node
    function createMember(member) {
        var container = document.createElement('div');
        container.className = 'member';

        var image = document.createElement('img');
        image.className = 'member-photo';
        image.src = member.imageUrl || DEFAULT_IMAGE;

        var name = document.createElement('h1');
        name.className = 'member-name';
        name.innerText = member.name;

        var position = document.createElement('h2');
        position.className = 'member-position';
        position.innerText = emoji.replace_colons(member.position);

        container.appendChild(image);
        container.appendChild(name);
        container.appendChild(position);

        return container;
    }

    // Creates a team in the DOM and renders it on the node
    function renderTeam(team, node) {
        var button = document.createElement('a');
        button.className = 'button accordion';
        button.innerText = emoji.replace_colons(team.name);

        var icon = document.createElement('i');
        icon.className = 'right fa fa-caret-right';
        button.appendChild(icon);

        var panel = document.createElement('div');
        panel.className = 'panel';
        team.members.forEach(function (member) {
            panel.appendChild(createMember(member));
        });

        node.appendChild(button);
        node.appendChild(panel);
        addAccordion(button, panel);
    }

    // Adds handlers for click events on drop-down accordions
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

    if (window.location.hostname === "0.0.0.0" || window.location.hostname === "127.0.0.1" || window.location.hostname.indexOf("ubclaunchpad.netlify.com") > 0) {
        // Render mock data
        var container = document.getElementById('team-accordions');
        [
            {
                name: "Inertia :cloud:",
                platform: "DevOps",
                members: [
                    { name: "Robert Lin", githubUsername: "bobheadxi", major: "Mathematics", position: ":meat_on_bone: lunch eater", biography: "Tech lead @Inertia!", imageUrl: "https://avatars.slack-edge.com/2018-03-31/339451741573_cf430013fb5ae00e1999_192.png" },
                    { name: "John Lee", githubUsername: "PiggySpeed", major: "BCS", position: "big pharma", biography: "<http://cnstimulant.com|cnstimulant.com>", imageUrl: "https://avatars.slack-edge.com/2018-01-14/298931205877_b481e87f890db81eb354_192.jpg"},
                ]
            },
            {
                name: "Inertia2",
                platform: "DevOps",
                members: [
                    { name: "Robert Lin", githubUsername: "bobheadxi", major: "Mathematics", position: "lunch eater", biography: "Tech lead @Inertia!", imageUrl: "https://avatars.slack-edge.com/2018-03-31/339451741573_cf430013fb5ae00e1999_192.png" },
                    { name: "John Lee", githubUsername: "PiggySpeed", major: "BCS", position: "big pharma", biography: "<http://cnstimulant.com|cnstimulant.com>", imageUrl: "https://avatars.slack-edge.com/2018-01-14/298931205877_b481e87f890db81eb354_192.jpg"},
                ]
            },
        ].forEach(function (team) {
            renderTeam(team, container);
        });
    } else {
        // Pull roster data and render it
        fetch(URL).then(function (res) {
            res.json().then(function (teams) {
                var container = document.getElementById('team-accordions');
                console.log(teams);
                teams.forEach(function (team) {
                    renderTeam(team, container);
                });
            });
        });
    }
}());
