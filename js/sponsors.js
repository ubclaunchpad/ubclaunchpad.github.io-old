// Highlight `Sponsors` section with the sponsor's theme color when the
// logo is moused over

(function () {
	var section = document.getElementById('sponsors');
	var cl = section.classList;
	console.log(section);

	var github = document.getElementById('github');
	var digitalOcean = document.getElementById('digital-ocean');
	console.log(github);
	console.log(digitalOcean);

	github.addEventListener('mouseover', function () {
		console.log('mouseover, github');
		cl.add('github');
	});

	github.addEventListener('mouseout', function () {
		console.log('mouseout, github');
		cl.remove('github');
	});

	digitalOcean.addEventListener('mouseover', function () {
		cl.add('digital-ocean');
	});

	digitalOcean.addEventListener('mouseout', function () {
		cl.remove('digital-ocean');
	});
}())
