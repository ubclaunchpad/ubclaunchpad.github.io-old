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
// NOTE: not currently used, but we can highlight the section before its
// div reaches the top of the screen by using the viewPort height.
(function () {
  var sections = getSections();
  var navbar = document.getElementById('navbar');

  // Update our reference to the section heights whenever the document body height changes.
  onElementHeightChange(document.body, function () {
    sections = getSections();
  });

  // Listens on scroll events and highlights nav bar links when scrolling
  // over the corresponding section
  function scrollListener () {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    var navbarHeight = navbar.offsetHeight;
    // var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var effectiveHeight = top + navbarHeight;

    sections.forEach(function(section, i) {
      var cl = section.navElement.classList;
      if (effectiveHeight > section.start && effectiveHeight <= section.stop) {
        if (!cl.contains('active')) cl.add('active');
      } else {
        if (cl.contains('active')) cl.remove('active');
      }
    });
  }

  // Handles scrolling to the correct place relative to the current navbar size
  // when clicking a navbar link.
  sections.forEach(function(section, i) {
    var j = i;
    section.navElement.addEventListener('click', function (event) {
      event.preventDefault();
      window.scrollTo(0, sections[j].start - navbar.offsetHeight + 1);
      setTimeout(scrollListener, 1);
    });
  });

  window.addEventListener('scroll', scrollListener);
}());

// Calls the callback whenever the input element `el` changes height
function onElementHeightChange (el, callback) {
  var lastHeight = el.clientHeight;
  var newHeight;

  (function run () {
    newHeight = el.clientHeight;
    if (lastHeight != newHeight) {
      callback();
      lastHeight = newHeight;
    }

    if (el.onElementHeightChangeTimer) {
      clearTimeout(el.onElementHeightChangeTimer);
    }

    el.onElementHeightChangeTimer = setTimeout(run, 200);
  })();
}

// Returns an array of section elements, `start`, the height
// at which to start highlighting them, and `stop`, the height
// at which to stop highlighting them.
function getSections () {
  var cumulativeHeight = document.getElementById('banner').offsetHeight;
  var elements = [];

  // NOTE: when adding or removing nav sections, update this list.
  var sections = ['about', 'team', 'join', 'sponsors', 'contact']

  return sections.map(function (id, i) {
    var el = document.getElementById(id);
    var navEl = document.getElementById('nav-' + id);

    var start = cumulativeHeight;
    cumulativeHeight += el.offsetHeight;
    var stop = cumulativeHeight;

    // Special case for last section
    if (i === sections.length - 1) stop = Infinity;

    return {
      navElement: navEl,
      start: start,
      stop: stop
    };
  });
}
