// Highlight `Sponsors` section with the sponsor's theme color when the
// logo is moused over

(function () {
	// NOTE: Removing this for now because VLING logo isn't black. 
	// Can revisit later.
	return;
	var section = document.getElementById('sponsors');
	var cl = section.classList;

	var github = document.getElementById('github');
	var digitalOcean = document.getElementById('digital-ocean');
	var mda = document.getElementById('mda');
	var lighthouseLabs = document.getElementById('lighthouse-labs');
	var vling = document.getElementById('vling')

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

	mda.addEventListener('mouseover', function () {
		cl.add('mda');
	});
	mda.addEventListener('mouseout', function () {
		cl.remove('mda');
	});

	lighthouseLabs.addEventListener('mouseover', function () {
		cl.add('lighthouse-labs');
	});
	lighthouseLabs.addEventListener('mouseout', function () {
		cl.remove('lighthouse-labs');
	});

	vling.addEventListener('mouseover', function () {
		cl.add('vling');
	});
	vling.addEventListener('mouseout', function () {
		cl.remove('vling');
	});
}())
