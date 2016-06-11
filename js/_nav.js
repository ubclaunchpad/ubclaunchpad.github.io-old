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
