// Highlight `Sponsors` section with the sponsor's theme color when the
// logo is moused over

(function () {
	var section = document.getElementById('sponsors');
	var cl = section.classList;

	var github = document.getElementById('github');
	var digitalOcean = document.getElementById('digital-ocean');

	github.addEventListener('mouseover', function () {
		cl.add('github');
	});

	github.addEventListener('mouseout', function () {
		cl.remove('github');
	});

	digitalOcean.addEventListener('mouseover', function () {
		cl.add('digital-ocean');
	});

	digitalOcean.addEventListener('mouseout', function () {
		cl.remove('digital-ocean');
	});
}())
