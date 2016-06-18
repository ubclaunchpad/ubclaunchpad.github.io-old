// Handles the collapse/enlarge animations of the nav bar.
// Adds a listener to the scroll event which adds/removes a
// class to the navbar which initiates the animation.
(function () {
  var nav = document.getElementById('navbar');
  var cl = nav.classList;

  function scrollListener (event) {
    var top = window.pageYOffset || document.documentElement.scrollTop;

    if (top < navbar.offsetHeight) {
      if (cl.contains('collapsed')) cl.remove('collapsed');
      if (!cl.contains('enlarged')) cl.add('enlarged');
    } else {
      if (cl.contains('enlarged')) cl.remove('enlarged');
      if (!cl.contains('collapsed')) cl.add('collapsed');    }
  }

  window.addEventListener('scroll', scrollListener);
})();

// Handles highlighting nav items when their sections are scrolled over
(function () {
  var sections = getSections();
  console.log(sections);

  function scrollListener (event) {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    var navbarHeight = document.getElementById('navbar').offsetHeight;
    var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var effectiveHeight = top + navbarHeight + (viewportHeight / 3);

    sections.forEach(function(section, i) {
      var cl = section.navElement.classList;
      if (effectiveHeight > section.start && effectiveHeight <= section.stop) {
        if (!cl.contains('active')) cl.add('active');
      } else {
        if (cl.contains('active')) cl.remove('active');
      }
    });
  }

  window.addEventListener('scroll', scrollListener);
}());

// Returns an array of section elements, `start`, the height
// at which to start highlighting them, and `stop`, the height
// at which to stop highlighting them.
function getSections () {
  var cumulativeHeight = document.getElementById('banner').offsetHeight;
  var elements = [];

  ['about', 'team', 'sponsors', 'contact'].forEach(function(id, i) {
    var el = document.getElementById(id);
    var navEl = document.getElementById('nav-' + id);

    var start = cumulativeHeight;
    cumulativeHeight += el.offsetHeight;
    var stop = cumulativeHeight;

    // Special case for last sections
    if (i === 3) stop = Infinity;

    elements.push({
      navElement: navEl,
      start: start,
      stop: stop
    });
  });

  return elements;
}
